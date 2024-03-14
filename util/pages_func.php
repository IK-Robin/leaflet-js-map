<?php




/*=========================
// add plugin main page code 
============================*/

function ikr_leafletjs_map()
{

    ?>
    <?php include_once ROBIN_DIR_PATH . './views/ikr_dashbord.php'; ?>
<?php

}

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


function ikr_leaflet_shortcode()
{
    echo 'robin';
}

?>