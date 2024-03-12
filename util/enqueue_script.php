<?php
/**
 * enqeue all style and js file 
 */


function leaflet_js_map_enqueue_scripts()
{

  $page_param = isset($_GET['page']) ? $_GET['page'] : '';
// enque ue global js  
  wp_enqueue_script( 'ikr_global', plugin_dir_url( __FILE__ ) . '../js/ikr_global.js', [], '1.0.0', false );

   if ($page_param == "Add-New-Map") {


  // Enqueue Leaflet CSS
  wp_enqueue_style('leaflet-css', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');

  // Enqueue Leaflet JS directly from CDN
  wp_enqueue_script('leaflet-js', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js', array(), '1.7.1', true);

  // Enqueue custom JavaScript file for Leaflet functionalities
  wp_enqueue_script('leaflet-custom-js', plugin_dir_url(__FILE__) . '../js/leaflet.js', array('leaflet-js'), '1.0.0', true);


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
  wp_enqueue_style('leaflet-custom-css', plugin_dir_url(__FILE__) . '../css/style.css', array(), '1.0.0', 'all');
  }


}

add_action('admin_enqueue_scripts', 'leaflet_js_map_enqueue_scripts');
?>