<?php
/*
Plugin Name: Leaflet  Map wp
Plugin URI: https://example.com/leaflet-js-map
Description: This plugin integrates Leaflet JS library for displaying interactive maps on your WordPress site.
Version: 1.0.0
Author: Your Name
Author URI: https://example.com/
License: GPLv2 or later
Text Domain: leaflet-js-wp
*/

// Enqueue Leaflet JS library and related scripts


// leaflet js , autocomplete, openstreet map 

// Define file path 
define('ROBIN_DIR_PATH',plugin_dir_path(__FILE__));
include_once (ROBIN_DIR_PATH . './functions.php');

include_once(ROBIN_DIR_PATH . './ikr-shortcod.php');






// register the menu page 
add_action('admin_menu','ikr_add_menu_page');






// register bd to the wp database 
include_once ROBIN_DIR_PATH . './util/db.php';

register_activation_hook( __FILE__, 'ikr_leaflet_js_db_connection' );



