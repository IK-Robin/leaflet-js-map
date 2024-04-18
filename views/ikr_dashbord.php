<?php
/**
 * add dashbord code here 
 */
?>

<div class="ikr_dahsbord">
  <h1>Leaflet Map Default Setting</h1>

  <div class="default_setting_form">
    <form id="defaultSetting">

      <div id="defaultSettings">

        <div class="default_f_section">
          <h3  class="map_zoom">Map zoom settings</h3>
          <input type="hidden" name="zoomOption" id="zoomOption" value="auto_zoom">
          
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" name="autoZoom" id="autoZoom" value="">
              auto set map center view
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" name="customZoom" id="customZoom" value="" >
              Custom zoom
            </label>
          </div>
          <p>Add custom zoom or Auto Zoom to set the center point of the map view. </p>
          
        </div>
        <div class="default_f_section">
  <h3>Map Dimantion </h3>
        <div class="dimantion_container">
          
        <div class="dimantion_item">
          <label for="default_width"> Width: </label>
          <input type="number" min="10" max="100" name="default_width" id="default_width">

          </div>
          <div class="dimantion_item">
          <label for="default_height"> Height:  </label>
          <input type="number" min="100" name="default_height" id="default_height">

          </div>
        </div>
         
          <p> Aspect Ration of the map value should be Width:  in " % " height in " px " </p>
        </div>



        <div class="default_f_section showOption">
       <h3>Map center Location </h3>
       <div class="dimantion_container">
        <div class="dimantion_item">
        <label for="default_lat"> Latitude </label>
          <input type="text" name="default_lat" id="default_lat">
        </div>
        <div class="dimantion_item">
        <label for="default_lng"> Longitude: </label>
          <input type="text" name="default_lng" id="default_lng">
        </div>
       </div>
         
         
          <p>       Add (latitude and longitude) to set to set the center point of the map view.</p>
     
        </div>


        <div class="default_f_section showOption">
      
        <h3>Map Zoom Lavel </h3>
          <input type="number" min="1" max="18" name="default_zoom" id="default_zoom">
          <p class="zoomP"> The default zoom for maps sets how close or far away the map appears when you first open it. You can
            adjust this zoom level for each map, with values ranging from 1 to 18, allowing you to customize the view
            according to your preference. </p>
        </div>







      </div>
      <input type="submit" value="Save">


    </form>

  </div>
</div>