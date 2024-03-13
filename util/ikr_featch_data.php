<?php


/**************************************
    featch data from  the server and update the view using ajax 
***********************************/

// add new data in database
/**************************************
    Fetch data from the server and update the view using AJAX 
**************************************/
// Add new data to the database
function load_data_from_db() {
    global $wpdb;

    error_log('Form data received: ' . print_r($_POST, true)); // Debug

    // Sanitize the input fields 
    $latitude = isset($_POST['lat']) ? sanitize_text_field($_POST['lat']) : '';

    $longitude = isset($_POST['lng']) ? sanitize_text_field($_POST['lng']) : '';

    $popup_text = isset($_POST['popup-text']) ? sanitize_text_field($_POST['popup-text']) : '';

    $mapHiddenId = isset($_POST['mapHiddenId']) ? sanitize_text_field($_POST['mapHiddenId']) : '';

   
    $table_name = $wpdb->prefix . "ikr_leaflet_js_db";
    $query = $wpdb->prepare("SELECT * FROM `$table_name` WHERE 1");

    $wpdb->insert(
        $table_name,
        [
            'lat' => $latitude,
            'lng' => $longitude,
            'popup_text' =>$popup_text,
            // add a random marker_id
            'marker_id' => $mapHiddenId  ,
        ]
    );
    $result = $wpdb->get_row($query);
    $data = $wpdb->get_results("SELECT * FROM $table_name", ARRAY_A);
   
    if ($result) {
        wp_send_json_success($result);
    } else {
        wp_send_json_error('Failed to save form data.');
    }
}
add_action('wp_ajax_load_data_from_db', 'load_data_from_db');
add_action('wp_ajax_nopriv_load_data_from_db', 'load_data_from_db');





/**************************
 * write code  for edit  map marker popup here
 ***********************/

 function ikr_edit_marker_detail() {
    global $wpdb;

    error_log('Form data received: ' . print_r($_POST, true)); // Debug

    // Sanitize the input fields 
    $latitude = isset($_POST['lat']) ? sanitize_text_field($_POST['lat']) : '';

    $longitude = isset($_POST['lng']) ? sanitize_text_field($_POST['lng']) : '';

    $popup_text = isset($_POST['popup-text']) ? sanitize_text_field($_POST['popup-text']) : '';
    $markerid = isset($_POST['markerid']) ? sanitize_text_field($_POST['markerid']) : '';

    $table_name = $wpdb->prefix . "ikr_leaflet_js_db";
    
   

    $wpdb->update(
        $table_name,
        [
            'lat' => $latitude,
            'lng' => $longitude,
            'popup_text' =>$popup_text,
            

        ], array('marker_id' =>$markerid),
    );
    
}

add_action('wp_ajax_ikr_edit_marker_detail', 'ikr_edit_marker_detail');
add_action('wp_ajax_nopriv_ikr_edit_marker_detail', 'ikr_edit_marker_detail');


// featch data from server 

// Function to fetch data from the server
function fetch_data_from_server() {
    global $wpdb;
    $table_name = $wpdb->prefix . "ikr_leaflet_js_db";
    $data = $wpdb->get_results("SELECT * FROM $table_name", ARRAY_A);
    wp_send_json_success($data);
}
add_action('wp_ajax_fetch_data_from_server', 'fetch_data_from_server');
add_action('wp_ajax_nopriv_fetch_data_from_server', 'fetch_data_from_server');
function fetch_data_server_default() {
    global $wpdb;
    $table_name = $wpdb->prefix . "ikr_default_setting";
    $data = $wpdb->get_results("SELECT * FROM $table_name", ARRAY_A);
    wp_send_json_success($data);
}
add_action('wp_ajax_fetch_data_server_default', 'fetch_data_server_default');
add_action('wp_ajax_nopriv_fetch_data_server_default', 'fetch_data_server_default');


// delet marker 
function ikr_delete_marker () {
    global $wpdb;
    $table_name = $wpdb->prefix . 'ikr_leaflet_js_db';
    $markerid = $_POST['markerID']; // get value of input with id="markerID"
    $result = $wpdb-> delete(
        $table_name,
        array( 'marker_id' => $markerid )
    );
   if ($result) {

    wp_send_json_success( 'Data deleted successfully');
   }else{
    wp_send_json_success( 'Failed to delete data.');
   }
}

add_action('wp_ajax_ikr_delete_marker', 'ikr_delete_marker');
add_action('wp_ajax_nopriv_ikr_delete_marker', 'ikr_delete_marker');




/* *******************************************
add default setting 
********************************************* */
function ikr_default_setting (){
    global $wpdb;
    $table_name = $wpdb->prefix . "ikr_default_setting";
    // $latitude = isset($_POST['lat']) ? sanitize_text_field($_POST['lat']) : '';


}

?>