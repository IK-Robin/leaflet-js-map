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
          <input type="hidden" name="zoomOption" id="zoomOption" value="auto_zoom">
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" name="customZoom" id="customZoom" value="" >
              Custom zoom
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" name="autoZoom" id="autoZoom" value="">
              auto set map center view
            </label>
          </div>

          <p> select the map center point </p>
        </div>
        <div class="default_f_section">
          <label for="default_width"> Width: </label>
          <input type="number" min="10" max="100" name="default_width" id="default_width">

          <label for="default_height"> Height: </label>
          <input type="number" min="100" name="default_height" id="default_height">

          <p> The default width for maps establishes their initial size, with values expressed in percentages. You can
            also individually adjust the width for each map according to your preferences. </p>
        </div>



        <div class="default_f_section showOption">
          <label for="default_lat"> Latitude </label>
          <input type="text" name="default_lat" id="default_lat">
          <label for="default_lng"> Longitude: </label>
          <input type="text" name="default_lng" id="default_lng">
          <p>The default Latitude Longitude determines the starting viewpoint on maps when the page loads. You can also
            modify the Latitude to change where the map centers when you first open it.</p>
        </div>


        <div class="default_f_section showOption">
          <label for="default_zoom"> Zoom: </label>
          <input type="number" min="1" max="18" name="default_zoom" id="default_zoom">
          <p> The default zoom for maps sets how close or far away the map appears when you first open it. You can
            adjust this zoom level for each map, with values ranging from 1 to 18, allowing you to customize the view
            according to your preference. </p>
        </div>







      </div>
      <input type="submit" value="Save">


    </form>

  </div>
</div>