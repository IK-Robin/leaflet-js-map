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

function leaflet_js_map_enqueue_scripts()
{

  $page_param = isset($_GET['page']) ? $_GET['page'] : '';
// enque ue global js  
  wp_enqueue_script( 'ikr_global', plugin_dir_url( __FILE__ ) . './js/ikr_global.js', [], '1.0.0', false );

   if ($page_param == "Add-New-Map") {


  // Enqueue Leaflet CSS
  wp_enqueue_style('leaflet-css', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');

  // Enqueue Leaflet JS directly from CDN
  wp_enqueue_script('leaflet-js', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js', array(), '1.7.1', true);

  // Enqueue custom JavaScript file for Leaflet functionalities
  wp_enqueue_script('leaflet-custom-js', plugin_dir_url(__FILE__) . 'js/leaflet.js', array('leaflet-js'), '1.0.0', true);


  // localize script 
  wp_localize_script( 'leaflet-custom-js', 'get_url', [
    'ajaxurl' => admin_url('admin-ajax.php'),
    'action' => 'load_data_from_db',
    'dataF' => 'fetch_data_from_server',
    'editMarker' => 'ikr_edit_marker_detail',
    'deletMarker' => 'ikr_delete_marker',
  ] );


  // enqeue autocomplite 
  wp_enqueue_script('autocomplete-script', 'https://cdn.jsdelivr.net/gh/tomickigrzegorz/autocomplete@1.8.6/dist/js/autocomplete.min.js', array(), '1.8.6', true);


  // autocomplete css 
  wp_enqueue_style('autoComplet', 'https://cdn.jsdelivr.net/gh/tomickigrzegorz/autocomplete@1.9.0/dist/css/autocomplete.min.css');


  // enqueue Css 
  wp_enqueue_style('leaflet-custom-css', plugin_dir_url(__FILE__) . 'css/style.css', array(), '1.0.0', 'all');
  }


}

add_action('admin_enqueue_scripts', 'leaflet_js_map_enqueue_scripts');



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