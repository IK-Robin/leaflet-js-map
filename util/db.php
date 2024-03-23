<?php
/******************************** 
 * This file is for creating a database table for Leaflet.js map
****/
// Create database tables

function ikr_leaflet_js_db_connection() {
    global $wpdb;

    // Table 1: ikr_leaflet_js_db
    $table_name_1 = $wpdb->prefix . 'ikr_leaflet_js_db';
    $charset_collate = $wpdb->get_charset_collate();

    if ($wpdb->get_var("SHOW TABLES LIKE '$table_name_1'") != $table_name_1) {
        // If the table doesn't exist, create it
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
    }

    if ($wpdb->get_var("SHOW TABLES LIKE '$table_name_1'") == $table_name_1) {
        // If the table already exists, add the new fields if they don't exist
        $fields_to_add = array('id', 'lat', 'lng', 'address', 'phone','email','urls','marker_id');
        
        foreach ($fields_to_add as $field) {
            $field_exists = $wpdb->get_var("SHOW COLUMNS FROM $table_name_1 LIKE '$field'");
            if (!$field_exists) {
                $alter_sql = "ALTER TABLE $table_name_1 ADD $field VARCHAR(100) NOT NULL AFTER marker_id";
                $wpdb->query($alter_sql);
            }
        }
    }
    
    

    // Table 2: ikr_default_setting
    $table_name_2 =  $wpdb->prefix . 'ikr_default_setting';


    if ($wpdb->get_var("SHOW TABLES LIKE '$table_name_2'") != $table_name_2) {
        // If the table doesn't exist, create it
        $sql_2 = "CREATE TABLE $table_name_2 (
            id INT(10) NOT NULL AUTO_INCREMENT,
            Latitude FLOAT NOT NULL DEFAULT 23.8536047088421,
            Longitude FLOAT NOT NULL DEFAULT 89.24606323242189,
            zoom FLOAT NOT NULL DEFAULT 12,
            width FLOAT NOT NULL DEFAULT 50,
            height FLOAT NOT NULL DEFAULT 50,
            zoom_option VARCHAR(100) DEFAULT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql_2);

        // Add default row values
        $wpdb->insert($table_name_2, array(
            'Latitude' => 23.8536047088421,
            'Longitude' => 89.24606323242189,
            'zoom' => 2,
            'width' => 100,
            'height' => 300,
            'link' => '',
        ));
    }
}

// Call the function to create/update tables
ikr_leaflet_js_db_connection();
?>
