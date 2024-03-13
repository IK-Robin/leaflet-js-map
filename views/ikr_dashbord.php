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
               <p>Default longitude for maps. You can also change this for each map </p>
            </div>

            <div class="default_f_section">
              <label for="default_lng">Default Longitude: </label>
              <input type="text" name="default_lng" id = "default_lng">
             <p> Default zoom for maps. You can also change this for each map </p>
            </div>
            <div class="default_f_section">
              <label for="default_zoom">Default Zoom: </label>
              <input type="number"   min="1" max="18" name="default_zoom" id = "default_zoom">
            <p>   Default Zoom for maps. Values can include 1 to 18  You can also change this for each map </p>
            </div>
            
            <div class="default_f_section">
              <label for="default_width">Default Width: </label>
              <input type="number" min="1" max="100"  name="default_width" id = "default_width">
            <p>   Default Width for maps. Values can include in %. You can also change this for each map Width. </p>
            </div>
            
            <div class="default_f_section">
              <label for="default_height">Default Height: </label>
              <input type="number" min="1" max="100"  name="default_height" id="default_height">

            <p>   Default Height for maps. Values can include in %. You can also change this for each map Height. </p>
            </div>
            
            <div class="default_f_section">
              <label for="default_link">Default url: </label>
              <input type="number" min="1" max="100"  name="default_link" id="default_link">

            <p>   Default url for maps. Values can include any link such as your website link. You can also change this for each map url. </p>
            </div>


            <input type="submit" value="Save">

            
         </form>
      </div>
   </div>