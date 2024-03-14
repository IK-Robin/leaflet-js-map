
<!-- add some keywork for github search  -->
# IKRMAP

IKRMAP Map is a simple web application that allows users to explore interactive maps and find points of interest.

## Features

- Explore interactive maps
- Search for specific locations
- View points of interest
- Zoom in and out for detailed exploration
- Default viwe to see the  whole world or focus on a particular region.
- Customize map Width and Height 
- Default Zoom 
- Default latitude and  Longitude (center point)
- Customizable map marker and popup  text
- Add custom markers 
- Add Custom marker detail  popups
- Add Default Url s that can be opened when clicking on links in popups
- Save current view as default view
- Edit marker popup text  directly from map
- Delete a marker or marker popup on click the marker you want

## Technologies Used

- HTML
- CSS
- JavaScript
- Leaflet.js (for map rendering)
- Mapbox API (for map data)

## Getting Started

To get started with ikrMap, simply install this plugin in your wordpress directory  and follow these steps:

1. Install Wordpress if not already installed.
2. Navigate to your WordPress plugins installation page.
3. Click "Add New Plugin" button.
4. Click "upload Plugin" button and select `ikrmap.zip` file.
5. After uploading is complete, click "Install Now" button.
6. Once installed, activate the plugin through the 'Installed Plugins' page in WordPress.
7. Open any post/page where you have added shortcode `[IKRMAP]`
8. You will now see an embedded map on your webpage!


   ## Edit The Map Detail 
   If you Want to Edit the Map marker or Default View  details ,you need to go to wp-admin -> leaflet map -> Edit.
   You can edit all details about the map by going into the Leaflet Map -> Edit -> Visual  tab. Here you can change the following settings : 
   You can edit the map details by following these steps:
   
   1. Go to Dashboard -> leaflet map -> Edit
   2. If you need to add new Marker Then click on "Add New Marker"  Button.
        - Now You just Click  On Map To Set Lat & Lng For Your Marker And Type A Popup Text In The Field Below It.
        Fill up all fields including Latitude ,Longitude and Popup Text .

        
        - After Clicking  On This Button A Popup Will Appear Where You Can Enter All Details Of Your Marker Like
      Fill up all the fields including Popup Text , Lat & Lng .

   3. Click on it and then click on the pencil icon at the top right corner of the editor window. This will open up the full screen editor for
   3. Double click on it to open  it for editing
 
## Dashbord 
The dashboard is indecate that  you can click on it to view more information about a location or zoom into a particular area. It

The dashboard is where you can interact with the application. It includes:  
1. Here you can add the deflult Latitude to see the map  at that location when the page loads.
2. default map zoom  level. You can use this feature to view different areas on the map by changing the zoom level.
3. width  & height are used to set the size of the map on the screen.
4. The zoom level is controlled by using "+", "-" buttons or dragging/zooming the map itself.


add data attribut to the edit button to get the exect match of the marker to featch and edit the data from db.

1. add edit functionality
2. style the map 
3. summarize the map 
4. add link to the map  in a button.
5 add email  and phone number on the website. 
6. make sure that all links are clickable 
7.add the primary view of the map 
8. Add zoom controls to allow users to interactively explore the map at different levels of detail</s>



## work
add automaticly row in the bd 