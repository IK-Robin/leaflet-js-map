<?php

/******************************** 
 * This is the file for creating a database table for Leaflet.js map
****/
// Create db table property 

function ikr_leaflet_js_db_connection() {
    global $wpdb;

    // Table 1: ikr_leaflet_js_db
    $table_name = $wpdb->prefix . 'ikr_leaflet_js_db';
    if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") !== $table_name) {
        // If the table doesn't exist, create it
        $charset_collate = $wpdb->get_charset_collate();
        $sql = "CREATE TABLE $table_name (
            id int(10) NOT NULL AUTO_INCREMENT,
            lat varchar(100) NOT NULL,
            lng varchar(100) NOT NULL,
            popup_text varchar(1000) NOT NULL,
            marker_id varchar(100) NOT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }

    // Table 2: ikr_default_setting
    $table_two =  $wpdb->prefix . 'ikr_default_setting';
    if ($wpdb->get_var("SHOW TABLES LIKE '$table_two'") !== $table_two) {
        // If the table doesn't exist, create it
        $charset_collate = $wpdb->get_charset_collate();
        $sql_2 = "CREATE TABLE $table_two (
            id INT(10) NOT NULL AUTO_INCREMENT,
            Latitude FLOAT NOT NULL DEFAULT '23.8536047088421',
            Longitude FLOAT NOT NULL DEFAULT '89.24606323242189',
            zoom FLOAT NOT NULL DEFAULT '12',
            width FLOAT NOT NULL DEFAULT '50',
            height FLOAT NOT NULL DEFAULT '50',
            other VARCHAR(100) DEFAULT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql_2);

        // Add default row values
        $wpdb->insert($table_two, array(
            'Latitude' => 23.8536047088421,
            'Longitude' => 89.24606323242189,
            'zoom' => 12,
            'width' => 50,
            'height' => 50
        ));
    } 
}

// Call the function to create/update tables
ikr_leaflet_js_db_connection();




?>

