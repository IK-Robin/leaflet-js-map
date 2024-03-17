<?php 
/**
 * add dashbord code here 
 */
    ?>

    <div class="ikr_dahsbord"> 
      <h1>Leaflet Map</h1>  
      
      <h3> Default Setting</h3>
      <div class="default_setting_form">
         <form  id="defaultSetting">
            <div class="default_f_section">
               <label for="default_lat"> Default Latitude </label> 
               <input type="text" name="default_lat"  id ="default_lat">
               <p>The default Latitude determines the starting viewpoint on maps when the page loads. You can also modify the Latitude to change where the map centers when you first open it.</p>
            </div>

            <div class="default_f_section">
              <label for="default_lng">Default Longitude: </label>
              <input type="text" name="default_lng" id = "default_lng">
             <p> The default longitude determines the starting viewpoint on maps when the page loads. You can also modify the longitude to change where the map centers when you first open it. </p>
            </div>
            <div class="default_f_section">
              <label for="default_zoom">Default Zoom: </label>
              <input type="number"   min="1" max="18" name="default_zoom" id = "default_zoom">
            <p>  The default zoom for maps sets how close or far away the map appears when you first open it. You can adjust this zoom level for each map, with values ranging from 1 to 18, allowing you to customize the view according to your preference. </p>
            </div>
            
            <div class="default_f_section">
              <label for="default_width">Default Width: </label>
              <input type="number" min="10" max="100"  name="default_width" id = "default_width">
            <p>  The default width for maps establishes their initial size, with values expressed in percentages. You can also individually adjust the width for each map according to your preferences. </p>
            </div>
            
            <div class="default_f_section">
              <label for="default_height">Default Height: </label>
              <input type="number" min="100"   name="default_height" id="default_height">

            <p>   The default Height for maps establishes their initial size, with values expressed in percentages. You can also individually adjust the Height for each map according to your preferences. </p>
            </div>
            
            <div class="default_f_section">
              <label for="default_link">Default url: </label>
              <input type="text"  name="default_link" id="default_link">

            <p>   The default URL for maps specifies the initial link, which can be any web address, like your website. You have the option to customize this URL for each map to direct users to different destinations as needed. </p>
            </div>


            <input type="submit" value="Save">

            
         </form>
      </div>
   </div>