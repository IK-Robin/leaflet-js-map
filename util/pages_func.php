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

            <!-- add accordion menu  -->

            <div class="ikr_accordion">
        <div class="ikr_accordion__item">
          <div class="ikr_accordion__item__header">
            Add Marker clicking  on the map
          </div>
      
          <div class="iaccordion__item__content">
          <?php include_once ROBIN_DIR_PATH . './views/ikr_edit_marker.php' ?>
           </div>
        </div>
              <div class="ikr_accordion__item">
          <div class="ikr_accordion__item__header">
           Title of your item / Question
          </div>
      
          <div class="iaccordion__item__content">
            <p> Explain of your item goes here...</p>
           </div>
        </div>
              <div class="ikr_accordion__item">
          <div class="ikr_accordion__item__header">
           Title of your item / Question
          </div>
      
          <div class="iaccordion__item__content">
            <p> Explain of your item goes here...</p>
           </div>
        </div>
  </div> <!-- id accordion end -->



                <?php include ROBIN_DIR_PATH . '/views/ikr_from.php' ?>
                
               
            </div>
        </div>

        <!-- Add input form -->
        <div class="ikr_c_right">
            <p>Use The Shortcode <strong>[ikr_leflet_map] </strong></p>
            <button id="save"> Save</button>

</div>

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