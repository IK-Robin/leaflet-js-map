<?php

/******************************** 
 * This is the file for creating a database table for Leaflet.js map
****/
// Create db table property 

function ikr_leaflet_js_db_connection() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'ikr_leaflet_js_db';
    // Check if the table exists
    if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") !== $table_name) {
        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
            id int(10) NOT NULL AUTO_INCREMENT,
            lat varchar(100) NOT NULL,
            lng varchar(100) NOT NULL,
            popup_text varchar(1000) NOT NULL,
            marker_id varchar(100) NOT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";

        // Execute the SQL query to create the table
        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
        dbDelta( $sql );
    }
}

// Call the function to create the table
ikr_leaflet_js_db_connection();

?>
