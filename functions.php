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

include_once ROBIN_DIR_PATH .'util/pages_func.php';


/*********************
 * add database related code  here
 ********************/

  include_once ROBIN_DIR_PATH .'util/ikr_featch_data.php';

  
/*********************
 * add shortcode related code  here
 ********************/

 include_once ROBIN_DIR_PATH .'/util/short_code.php';
?>