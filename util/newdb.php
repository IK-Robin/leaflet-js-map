<?php 


function ikr_leaflet_js_db_connection() {
    global $wpdb;

    // Table 1: ikr_leaflet_js_db
    $table_name_1 = $wpdb->prefix . 'ikr_leaflet_js_db';
    $charset_collate = $wpdb->get_charset_collate();

    if ($wpdb->get_var("SHOW TABLES LIKE '$table_name_1'") != $table_name_1) {
        // Create the table using prepared statements
        $sql_1 = "CREATE TABLE $table_name_1 (
            id INT(10) NOT NULL AUTO_INCREMENT,
            lat VARCHAR(100) NOT NULL,
            lng VARCHAR(100) NOT NULL,
            address VARCHAR(100) NOT NULL,
            phone VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            urls VARCHAR(1000) NOT NULL,
            marker_id VARCHAR(100) NOT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql_1);

        // Insert default row using prepared statements
        $wpdb->insert(
            $table_name_1,
            array(
                'lat' => 23.8536047088421,
                'lng' => 89.24606323242189,
                'address' => '2',
                'phone' => '100',
                'email' => '300',
                'urls' => 'https://hamjaiu.com',
                'marker_id' => '88759345',
            )
        );
    }

    // ... rest of the code with similar modifications for table 2 ...
}





?>