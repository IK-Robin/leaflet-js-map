document.addEventListener("DOMContentLoaded", () => {


    const map = L.map("map");
   
  // Set the view of the map using the configuration data
  async function add_defaultView() {
    let lat,lng;
    try {
      const data1 = await fetchAjaxRequest(get_url.featchdata);

      data1.forEach((data) => {
        console.log(data);
         lat = data.Latitude;

         lng = data.Longitude;
        const zoom = data.zoom;
        const width = data.width;
        const height = data.height;
        // calling map
        // stop width and height  is not set in config file
        // mapWidth.style.width = width + "%";
        // mapWidth.style.height = height + "px";

        function getConfigData() {
          // This function should return an object with latitude, longitude, and zoom level
          return {
            lat: lat,
            lng: lng,
            zoom: zoom,
          };
        }

        // Get the configuration data
        const config = getConfigData();

        map.setView([config.lat, config.lng], config.zoom);
        // Used to load and display tile layers on the map
        // Most tile servers require attribution, which you can set under `Layer`
        // openStreetmap is a popular option.
        // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        //   attribution:
        //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        // }).addTo(map);
        
        // add google map 
         L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);
      });
      markerBuind();
     
      

      map.on("click", (ev) => {
        // fill the input  with lat and lng of clicked place
        latituide.value = ev.latlng.lat;
        langtuide.value = ev.latlng.lng;
        // Add a click event listener to the map

        const latlng = ev.latlng;

        // Perform reverse geocoding using Leaflet's built-in method
        maphiddenId_add.value = Math.floor(Math.random() * 9000000 + 1000000);

        var newMarker;
        if (addMarker) {
          // asign the marker lat lng on click 
          
        latituide_edit.value = ev.latlng.lat;
        longtuide_edit.value = ev.latlng.lng;


          // Add new marker
          newMarker = L.marker(ev.latlng).addTo(map);

          newMarker.dragging.enable();

          ikr_edit_popup.style.display = "block";
          submit_form.style.display ='none';

          let randomMarkerId = Math.floor(Math.random() * 9000000 + 1000000);
          

          // add random id and detail text 
          hiddenMarkerId.value = randomMarkerId;
          newMarker
            .bindPopup(
              `<div class="popupWindow"><strong> Address:</strong><br>
              <strong>Sales Phone : </strong> <br> <strong> GeneralHours :</strong> <br> <strong> Website:</strong> <br><button class="editMarker" data-id="${randomMarkerId}">Edit</button> <button class="deletMarker" data-id="${randomMarkerId}">Delete</button><br>
            
          </div>`
            )
            .addTo(map);
          // markerBuind();

          // Make this marker draggable
          newMarker.dragging.enable();

          makeAjaxRequestGlobal(ikr_map_form, get_url.action,callbac =>{});

          newMarker.on("click", function (e) {
            // Get the popup content

            const markerPosition = e.target.getLatLng();
            //   map.flyTo(markerPosition, 18, {
            //     duration: 1 // Adjust the duration of the animation as needed
            // });
            // map.setView(markerPosition, 18);
            const popupContent = e.target.getPopup();
            console.log(e);

            const marker = e.target._popup._source;

            // Close the popup

            const editMarker =
              popupContent._contentNode.childNodes[0].querySelector('.editMarker');
              const deleteMarker =popupContent._contentNode.childNodes[0].querySelector('.deletMarker');

            editMarker.addEventListener("click", (editM) => {
              ikr_edit_popup.style.display = "block";
              submit_form.style.display = "none";

              // hide the popup on click edit btn
              // marker.closePopup();
              // get the dataset id of clicked button
              let id = editMarker.dataset.id;

              latituide_edit.value = e.latlng.lat;
              longtuide_edit.value = e.latlng.lng;

              hiddenMarkerId.value = editMarker.dataset.id;
              marker_id.value = editMarker.dataset.id;
              console.log(marker_id);
            });

            // delet the marker
            deleteMarker.addEventListener("click", (ev) => {
              
              ikr_edit_popup.style.display = "none";
              submit_form.style.display = 'block';
              // remove the marker
              map.removeLayer(newMarker);
              // remove from db
              marker_id.value = deleteMarker.dataset.id;
              makeAjaxRequestGlobal(deletemarker_form, get_url.deletMarker,c =>{});
            });
          });
        }
      });
    } catch (error) {
      console.error("Error fetching data from first AJAX request:", error);
    }
  }

  add_defaultView();

});