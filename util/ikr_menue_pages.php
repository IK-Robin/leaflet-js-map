<?php

/**
 * add all menue page herer
 */


 function ikr_add_menu_page()
 {
   add_menu_page('Leaflet map', 'Leaflet-map', 'manage_options', 'wp-store-locator-map', 'ikr_leafletjs_map', 'dashicons-admin-site', 10); // Page title, page slug, user role
 
   // Add submenu for 'All Map'
   
   add_submenu_page('wp-store-locator-map', "Dashboard", "Dashboard", 'manage_options', 'wp-store-locator-map', 'ikr_leafletjs_map');
 
   // Add submenu for 'All Maps'
   add_submenu_page('wp-store-locator-map', 'Add New Map', 'Add New Map', 'manage_options', 'Add-New-Map', 'ikr_leaflet_Add_New_Map');
   add_submenu_page('wp-store-locator-map', 'Shortcode', 'Shortcode', 'manage_options', 'Shortcode', 'ikr_leaflet_shortcode');
 }

?>