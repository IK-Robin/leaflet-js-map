/**
 * geocoding addresses search engine outside the map
 */

window.addEventListener("DOMContentLoaded", function () {
  const mapWidth = document.getElementById("map");
  const submit_form = document.getElementById('submit_form');
  const ikr_map_form = document.getElementById("ikr_map_form");
  const maphiddenId_add = document.getElementById("maphiddenId_add");
  const langtuide = document.getElementById("langtuide");
  const latituide = document.getElementById("latituide");
  const address = document.getElementById("address");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const input_url = document.getElementById("input_url");
  










  const ikr_edit_popup = document.getElementById("ikr_edit_popup");

  //select edit form element
  const ikr_map_form_edit = document.getElementById("ikr_map_form_edit");

  const hiddenMarkerId = document.getElementById("hiddenMarkerId");
  const latituide_edit = document.getElementById("latituide_edit");
  const longtuide_edit = this.document.getElementById("langtuide_edit");
  const phone_edit = document.getElementById("phone_edit");

  const address_edit = document.getElementById('address_edit');
  const input_url_edit = document.getElementById('input_url_edit');
  const email_edit = document.getElementById('email_edit');


  // const deletMarker_edit = document.getElementById('deletMarker');





  // select the delete marker form
  const deletemarker_form = document.getElementById("deletemarker_form");
  const marker_id = document.getElementById("marker_id");

  const save = document.getElementById("save");
  

  // Autocomplete
  new Autocomplete("search", {
    delay: 1000,
    selectFirst: true,
    howManyCharacters: 2,

    onSearch: function ({ currentValue }) {
      const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&q=${encodeURI(
        currentValue
      )}`;
// hide edit form 
ikr_edit_popup.style.display ='none';

      return new Promise((resolve) => {
        fetch(api)
          .then((response) => response.json())
          .then((data) => {
            resolve(data.features);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    },
    // nominatim
    onResults: ({ currentValue, matches, template }) => {
      const regex = new RegExp(currentValue, "i");
      // checking if we have results if we don't
      // take data from the noResults method
      return matches === 0
        ? template
        : matches
            .map((element) => {
              return `
                <li class="loupe" role="option">
                  ${element.properties.display_name.replace(
                    regex,
                    (str) => `<b>${str}</b>`
                  )}
                </li> `;
            })
            .join("");
    },

    onSubmit: ({ object }) => {
      console.log(object);
      const { display_name,name } = object.properties;
      console.log(name);
      const cord = object.geometry.coordinates;

     const  [lng,lat ] = cord;
     latituide.value = lat;
     langtuide.value = lng;
     address.value = display_name;

     
    //  add random id 
    let randomMarkerId = Math.floor(Math.random() * 9000000 + 1000000);
          maphiddenId_add.value = randomMarkerId;


      // custom id for marker
      const customId = Math.random();

      const marker = L.marker([cord[1], cord[0]], {
        title: display_name,
        id: customId,
      });

      marker.addTo(map).bindPopup(display_name);

      map.setView([cord[1], cord[0]], 8);

      map.eachLayer(function (layer) {
        if (layer.options && layer.options.pane === "markerPane") {
          if (layer.options.id !== customId) {
            map.removeLayer(layer);
          }
        }
      });
    },

    // get index and data from li element after
    // hovering over li with the mouse or using
    // arrow keys ↓ | ↑
    onSelectedItem: ({ index, element, object }) => {
      // console.log("onSelectedItem:", index, element, object);
    },

    // the method presents no results
    noResults: ({ currentValue, template }) =>
      template(`<li>No results found: "${currentValue}"</li>`),
  });

  // MAP

  // magnification with which the map will start

  // co-ordinates

  // add default setting on load
  // Create a map instance
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

  // Array to store marker references

  let addMarker = false;

  // get the html element

  const marker_add = document.getElementById("add_marker");

  const root = document.documentElement;

// Function to change the value of --hover-content
function changeHoverContent(property,newValue) {
  root.style.setProperty(`--${property} `, `"${newValue}"`);
}

  marker_add.addEventListener("click", (madd) => {
    if (addMarker) {
      marker_add.innerText = "add marker";

      ikr_edit_popup.style.display = "none";
      submit_form.style.display = "block";
      changeHoverContent('hover-content','hello');
      addMarker = false;
      
    } else {
      submit_form.style.display = "none";
      ikr_edit_popup.style.display = "block";
      marker_add.innerText = "stop adding marker";
      addMarker = true;
      console.log(addMarker,'else');
      // ikr_map_form.style.display = "none";
    }
  });

  // featch data on load and add marker

  // // Create markers for each marker data
  // markerData.forEach(mData => {
  //   const newMarker = L.marker(mData.location).addTo(map);
  //   newMarker.dragging.enable();

  //   // Add popup if available
  //   if (mData.popup) {
  //     newMarker.bindPopup(mData.popup);
  //   }

  //   // Add marker to markers array
  //   markers.push(newMarker);

  //   // Attach dragend event listener to each marker
  //   newMarker.on('dragend', function(event) {
  //     const marker = event.target;
  //     const position = marker.getLatLng();
  //     console.log('Latitude:', position.lat, 'Longitude:', position.lng);
  //   });
  //   newMarker.on('click',(cev) =>{
  //   if(deletMarker){

  //       map.removeLayer(newMarker);
  //       markers.splice(markers.indexOf(newMarker), 1);

  //   }
  // });

  // });

  // add marker on click

  //===================================

  // add from functionality
  // ===================================

  ikr_map_form.addEventListener("submit", (evnt) => {
    evnt.preventDefault();

    makeAjaxRequestGlobal(ikr_map_form, get_url.action,c=>{});

    // featcht data and  add  marker

    setTimeout(() => {
      markerBuind();
      langtuide.value ='';
      langtuide.value ='';
      address.value ='';
      phone.value ='';
      email.value ='';
      input_url.value ='';
    }, 100);
  });

  //===================================
  // add edit functionality
  // ===================================

  ikr_map_form_edit.addEventListener("submit", (evn) => {
    evn.preventDefault();
    makeAjaxRequestGlobal(ikr_map_form_edit, get_url.editMarker,c =>{
    });
    setTimeout(() =>{
      markerBuind();

    },100)
   
    ikr_edit_popup.style.display = "none";
    submit_form.style.display ='block';
  });

// delete the  marker 
  // deletMarker_edit.addEventListener('click',(ev) =>{
  //   makeAjaxRequestGlobal(deletemarker_form, get_url.deletMarker,c =>{
  //     if(c){
  //       markerBuind();
  //     }
  //   });
  //   ikr_edit_popup.style.display ='none';
  //   submit_form.style.display ='block';

  // });  

  // make a function to add marker to the map
  function markerBuind() {
    // Clear existing markers from the map
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);

        // Open the popup associated with the marker
      }
    });

    async function createMarkers() {
      try {
        const data = await fetchAjaxRequest(get_url.dataF);
        console.log(data);

        data.forEach((m) => {
          const newMarker = L.marker([m.lat, m.lng], { id: m.marker_id }).addTo(
            map
          );

          // enable dragging for each marker
          newMarker.dragging.enable();

          // Hide the popup

          // Bind popup with text and add marker ID to it
          newMarker.bindPopup(
            `<div class="popupWindow">
            
          <p> <strong> Address:</strong>  ${m.address}</p> 
            <p>  <strong>Sales Phone : </strong>  ${m.phone}</p>
           <p> <strong> GeneralHours :</strong>   ${m.email} </p>
            
           <p>  <strong> Website:</strong> <a href="${m.urls}" target="_blunk">${m.urls}</a> </p>
            
            
            <br>
            
            
            
            
            
            <button class="editMarker" data-id="${m.marker_id}">Edit</button> <button class="deletMarker" data-id="${m.marker_id}">Delete</button><br>
                      
                    </div>`
          );

          // Open popup for each marker

          newMarker.on("click", function (e) {
            // Get the popup content

            const markerPosition = e.target.getLatLng();
            const zoomLevel = map.getZoom(); // Get the current zoom level

            // if (zoomLevel < 13) {
            //   map.setView(markerPosition, 18); // Set the view to the marker position with a zoom level of 18
            // } else {
            //   const currentCenter = map.getCenter();
            //   const isSamePosition = markerPosition.equals(currentCenter);

            //   if (!isSamePosition) {
            //     map.flyTo(markerPosition, 18, {
            //       duration: 0.5, // Adjust the duration of the animation as needed
            //     });
            //   }
            // }

            const popupContent = e.target.getPopup();

            const marker = e.target._popup._source;

            // Close the popup

            const editMarker =popupContent._contentNode.childNodes[0].querySelector('.editMarker')
             
            console.log(editMarker);
              const deleteMarker =popupContent._contentNode.childNodes[0].querySelector('.deletMarker');
             
       

            editMarker.addEventListener("click", (editM) => {
              // hide and show the input fild 
              ikr_edit_popup.style.display = "block";
              submit_form.style.display = "none";
              // hide the popup on click edit btn
              // marker.closePopup();
              // get the dataset id of clicked button
              let id = editMarker.dataset.id;
              if (id == m.marker_id) {
                latituide_edit.value = m.lat;
                longtuide_edit.value = m.lng;
                address_edit.value = m.address;
                phone_edit.value = m.phone;
                email_edit.value = m.email;
                input_url_edit.value = m.phone;
                marker_id.value =  m.marker_id;
                hiddenMarkerId.value = m.marker_id;
              }
            });

            // delet the marker
            deleteMarker.addEventListener("click", (ev) => {
              // remove the marker   
              ikr_edit_popup.style.display = "none";
              submit_form.style.display = 'block';
              map.removeLayer(newMarker);
              // remove from db
              marker_id.value = deleteMarker.dataset.id;
              makeAjaxRequestGlobal(deletemarker_form, get_url.deletMarker,callback =>{});
            });
          });

          // add marker draging event  listener
          newMarker.on("dragend", function (event) {
            const marker = event.target;
            const position = marker.getLatLng();
            // get the marker id from the marker
            const popupContent = event.target.getPopup();
            const markerId = popupContent._source.options.id;

            if (markerId == m.marker_id) {
              latituide_edit.value = position.lat;
              longtuide_edit.value = position.lng;
              phone_edit.value = m.popup_text;
              hiddenMarkerId.value = m.marker_id;

              makeAjaxRequestGlobal(ikr_map_form_edit, get_url.editMarker,c=>{});
            }
          });
        });
      } catch (err) {
        console.log(err);
      }
    }

    createMarkers();

    // Fetch new data and add markers
  }

  //===================================
  // save the map
  // ===================================
  save.addEventListener("click", (ev) => {
    markerBuind();
    addMarker = false;
    marker_add.innerText = 'Add New Marker';
    ikr_edit_popup.style.display ='none';

  });

  //===================================
  // hide the edit popup
  // ===================================

  const hideEdit = document.querySelector(".editClose_btn");
  const closeB = document.querySelector("#closeB");

  hideEdit.addEventListener('click',() =>{
    ikr_edit_popup.style.display = "none";

  });
  closeB.addEventListener('click',() =>{
   submit_form.style.display = 'none';

  });
   


  

  // close this.window
});

// create function to show the marker in the map
