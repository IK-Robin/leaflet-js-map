<?php

/*=========================
Add all menue pages  here
============================*/
function ikr_add_menu_page()
{
  add_menu_page('Leaflet map', 'Leaflet-map', 'manage_options', 'wp-store-locator-map', 'ikr_leafletjs_map', 'dashicons-admin-site', 10); // Page title, page slug, user role

  // Add submenu for 'All Map'
  
  add_submenu_page('wp-store-locator-map', "Dashboard", "Dashboard", 'manage_options', 'wp-store-locator-map', 'ikr_leafletjs_map');

  // Add submenu for 'All Maps'
  add_submenu_page('wp-store-locator-map', 'Add New Map', 'Add New Map', 'manage_options', 'Add-New-Map', 'ikr_leaflet_Add_New_Map');
  add_submenu_page('wp-store-locator-map', 'Shortcode', 'Shortcode', 'manage_options', 'Shortcode', 'ikr_leaflet_shortcode');
}




/*=========================
enqueue all script 
============================*/

include_once ROBIN_DIR_PATH . './util/enqueue_script.php';



/*=========================
// add default function here 
============================*/


/*=========================
// add plugin main page code 
============================*/

function ikr_leafletjs_map()
{

  ?>
 echo 
  <?php

}

function ikr_leaflet_Add_New_Map ( ){

  ?> 
  
  <?php include_once ROBIN_DIR_PATH . './views/ikr_leaflet_main_page.php'; ?>
  <!-- add input form    -->

  <?php include ROBIN_DIR_PATH . '/views/ikr_from.php' ?>
  
  <?php include_once ROBIN_DIR_PATH. './views/ikr_edit_marker.php' ?>
  <?php
}


function ikr_leaflet_shortcode()
{
  echo 'robin';
}


/*********************
 * add database related code  here
 ********************/

  include_once ROBIN_DIR_PATH .'util/ikr_featch_data.php';

?>