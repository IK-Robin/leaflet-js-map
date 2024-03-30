<?php
/**
 * enqeue all style and js file 
 */


function leaflet_js_map_enqueue_scripts()
{

  $page_param = isset($_GET['page']) ? $_GET['page'] : '';


  
  wp_enqueue_script( 'ikr_global', plugin_dir_url( __FILE__ ) . '../js/ikr_global.js', [], '1.0.0', false );
 
// enque ue global js  


 

  // enqueue dahsbodr page js 
  if($page_param == 'wp-store-locator-map'){
    
   
    

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
    'featchdata' =>'fetch_data_server_default',
  ] );


  // enqeue autocomplite 
  wp_enqueue_script('autocomplete-script', 'https://cdn.jsdelivr.net/gh/tomickigrzegorz/autocomplete@1.8.6/dist/js/autocomplete.min.js', array(), '1.8.6', true);


}


if( $page_param == 'setting' ){

  wp_enqueue_script('ikr_leaflet_dahsbord', plugin_dir_url(__FILE__) . '../js/ikr_dashbord.js', array(), '1.0.0', true);
  wp_localize_script( 'ikr_leaflet_dahsbord', 'get_default', [
    'default_form' => 'ikr_default_setting',
    'featchdata' =>'fetch_data_server_default',
  ] );
}
}

add_action('admin_enqueue_scripts', 'leaflet_js_map_enqueue_scripts');




function ikr_enqueue_css_leaflet_map(){
    // Enqueue Leaflet CSS
    wp_enqueue_style('leaflet-css', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');
 // autocomplete css 
 wp_enqueue_style('autoComplet', 'https://cdn.jsdelivr.net/gh/tomickigrzegorz/autocomplete@1.9.0/dist/css/autocomplete.min.css');

// enqueue dashbord css 
wp_enqueue_style( 'ikr_dahsbord_css', plugin_dir_url( __FILE__ ) . '../css/ikr_dashbord.css', [], '1.0.1', 'all' );

 // enqueue Css 
 wp_enqueue_style('leaflet-custom-css', plugin_dir_url(__FILE__) . '../css/style.css', array(), '1.0.0', 'all');
 //  enqueue dashbord css 

 // enqueue shortcode css 
 wp_enqueue_style('ikr_shortcode', plugin_dir_url(__FILE__) . '../css/ikr_shortcode.css', array(), '1.0.0', 'all');


}

add_action( "admin_enqueue_scripts","ikr_enqueue_css_leaflet_map" );



/*******************************
 * enqueue script in font end 
 *******************************/


 
function enqueue_frontend_js() {



  // Enqueue Leaflet JS directly from CDN
  wp_enqueue_script('leaflet-js', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js', array(), '1.7.1', true);
    // Enqueue Leaflet CSS
    wp_enqueue_style('leaflet-css', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');


  
  // Enqueue the script
  wp_enqueue_script('font_end_js', plugin_dir_url( __FILE__ ). '../js/font_end_js.js', array('jquery'), '1.0', true);
  wp_localize_script('font_end_js', 'get_url', [
    'featchdata' =>'fetch_data_server_default',
    'ajaxurl' => admin_url('admin-ajax.php'),
    'dataF' => 'fetch_data_from_server',
  ] );
wp_enqueue_style( 'ikr_font_endcss', plugin_dir_url( __FILE__ ) .'../css/fontend_css.css', [], '1.0.1', 'all');


}
// Hook the function to the appropriate action
add_action('wp_enqueue_scripts', 'enqueue_frontend_js');
?>