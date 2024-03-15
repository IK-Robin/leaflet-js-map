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


function ikr_leaflet_Add_New_Map()
{

    ?>
        <?php include_once ROBIN_DIR_PATH . './views/ikr_leaflet_main_page.php'; ?>
    <div class="ikr_map_container">
        <div class="ikr_first_side">
            <div id="map"> </div>
        </div>
        <div class="ikr_second_side">

            <?php include ROBIN_DIR_PATH . '/views/ikr_from.php' ?>

            <?php include_once ROBIN_DIR_PATH . './views/ikr_edit_marker.php' ?>

        </div>
    </div>
    <!-- add input form    -->
    <?php
}
/*********************
 * add database related code  here
 ********************/

  include_once ROBIN_DIR_PATH .'util/ikr_featch_data.php';

?>