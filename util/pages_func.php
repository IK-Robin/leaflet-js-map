<?php




/*=========================
// add plugin main page code 
============================*/

function ikr_leafletjs_map()
{
    ?>
    <div class="ikr_map_container">
        <?php include_once ROBIN_DIR_PATH . './views/ikr_leaflet_main_page.php'; ?>
        <div class="ikr_map_content">
            <div class="ikr_first_side">
                <div id="map"> </div>
            </div>
            <div class="ikr_second_side">
                <?php include ROBIN_DIR_PATH . '/views/ikr_from.php' ?>
                <?php include_once ROBIN_DIR_PATH . './views/ikr_edit_marker.php' ?>
               
            </div>
        </div>

        <!-- Add input form -->
        <?php include_once ROBIN_DIR_PATH . './views/ikr_dashbord.php' ?>

    </div>
    <?php
}




function ikr_leaflet_Add_New_Map()
{
?> 
    <?php include_once ROBIN_DIR_PATH . './views/ikr_dashbord.php'; ?>
<?php
}



function ikr_leaflet_shortcode()
{
?> 
    <div > <h1>
      Map Shortcode 
    </h1>
    <p> Use this shortcode to show the map </p>
    <div class="shortcode">
    <h3> [ikr_leflet_map] </h3>
    </div>


    </div>
<?php
}

?>