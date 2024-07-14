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
            <?php include_once ROBIN_DIR_PATH . './views/ikr_edit_marker.php' ?>
            <!-- add accordion menu  -->
        
            <div class="ikr_accordion" id="ikr_accordion">
        <div class="ikr_accordion__item">
          <div class="ikr_accordion__item__header">
          Add New Marker (Click On Map To Add) 
          </div>
      
          <div class="iaccordion__item__content">
         
     
            <?php include ROBIN_DIR_PATH . '/views/add_new_marker_form.php' ?>
           </div>
        </div>
              <div class="ikr_accordion__item">
          <div class="ikr_accordion__item__header">
            add custom marker 
          </div>
      
          <div class="iaccordion__item__content">
              <!-- add search  bar   -->
   <div class="auto-search-wrapper loupe">
        <input
          type="text"
          autocomplete="off"
          id="search"
          placeholder="Enter The City Name"
        />

    </div>
          <?php include ROBIN_DIR_PATH . '/views/ikr_from.php' ?>
           </div>
        </div>
          
  </div> <!-- id accordion end -->



               
                
               
            </div>
        </div>

        <!-- Add input form -->
        <div class="ikr_c_save">
         
            <button  id="save"> Save Map</button>

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
    <div class="shortcod_container" > <h1>
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