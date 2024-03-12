<?php

/*=========================
Add all menue pages  here
============================*/

include_once ROBIN_DIR_PATH . './util/ikr_menue_pages.php';



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