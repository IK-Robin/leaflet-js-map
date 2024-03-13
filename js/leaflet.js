/**
 * geocoding addresses search engine outside the map
 */

window.addEventListener("DOMContentLoaded", function () {
  const langtuide = document.getElementById("langtuide");
  const latituide = document.getElementById("latituide");
  const ikr_map_form = document.getElementById("ikr_map_form");

  const maphiddenId_add = document.getElementById("maphiddenId_add");

  const ikr_edit_popup = document.getElementById("ikr_edit_popup");

  //select edit form element
  const ikr_map_form_edit = document.getElementById("ikr_map_form_edit");

  const hiddenMarkerId = document.getElementById("hiddenMarkerId");
  const latituide_edit = document.getElementById("latituide_edit");
  const longtuide_edit = this.document.getElementById("langtuide_edit");
  const popup_text_edit = document.getElementById("popup_text_edit");

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

      // You can also use static files
      // const api = './search.json'

      /**
       * jquery
       * If you want to use jquery you have to add the
       * jquery library to head html
       * https://cdnjs.com/libraries/jquery
       */
      // return $.ajax({
      //   url: api,
      //   method: 'GET',
      // })
      //   .done(function (data) {
      //     return data
      //   })
      //   .fail(function (xhr) {
      //     console.error(xhr);
      //   });

      // OR ----------------------------------

      /**
       * axios
       * If you want to use axios you have to add the
       * axios library to head html
       * https://cdnjs.com/libraries/axios
       */
      // return axios.get(api)
      //   .then((response) => {
      //     return response.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });

      // OR ----------------------------------

      /**
       * Promise
       */
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
      const { display_name } = object.properties;
      const cord = object.geometry.coordinates;

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
  const config = {
    minZoom: 2,
    maxZoom: 18,
  };
  // magnification with which the map will start
  const zoom = 2;
  // co-ordinates
  const lat = 23.8536047088421;
  const lng = 89.24606323242189;




async function fetchData() {
  try {
    const data1 = await fetchAjaxRequest(get_url.featchdata);
    console.log("Data from first AJAX request:", data1);

  } catch (error) {
    console.error("Error fetching data from first AJAX request:", error);
  }

  try {
    const data2 = await fetchAjaxRequest(get_url.dataF);
    console.log("Data from second AJAX request:", data2);
  } catch (error) {
    console.error("Error fetching data from second AJAX request:", error);
  }
}

fetchData();







  // calling map
  const map = L.map("map", config).setView([lat, lng], zoom);

  // Used to load and display tile layers on the map
  // Most tile servers require attribution, which you can set under `Layer`
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  let markers = [];
  let newMarker;

  // Array to store marker references

  let addMarker = false;
  let deletMarker = false;

  // get the html element

  const marker_add = document.getElementById("add_marker");

  marker_add.addEventListener("click", (madd) => {
    if (addMarker) {
      marker_add.innerText = "add marker";
      
      ikr_edit_popup.style.display = 'none';
      ikr_map_form.style.display = 'block';

      addMarker = false;
    } else {
      marker_add.innerText = "stop adding marker";
      ikr_edit_popup.style.display = 'block';
      
      ikr_map_form.style.display = 'none';
      addMarker = true;
    }
  });

  // featch data on load and add marker

  markerBuind();

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

  map.on("click", (ev) => {
    // fill the input  with lat and lng of clicked place
    latituide.value = ev.latlng.lat;
    langtuide.value = ev.latlng.lng;

   
    // Add a click event listener to the map

  const latlng = ev.latlng;

  // Perform reverse geocoding using Leaflet's built-in method
 console.log(ev);





    var newMarker;
    if (addMarker) {
      // Add new marker
      newMarker = L.marker(ev.latlng).addTo(map);

      newMarker.dragging.enable();
      let randomMarkerId = Math.floor(Math.random() * 9000000 + 1000000);
      maphiddenId_add.value = randomMarkerId;

      newMarker
        .bindPopup(
          `<div class="popupWindow"> hello popup <br><button class="editMarker" data-id="${randomMarkerId}">Edit</button> <button class="deletMarker" data-id="${randomMarkerId}">Delete</button><br>
          
        </div>`
        )
        .addTo(map);
      // markerBuind();

      // Make this marker draggable
      newMarker.dragging.enable();

      makeAjaxRequestGlobal(ikr_map_form, get_url.action);

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
          popupContent._contentNode.childNodes[0].childNodes[2];
        const deleteMarker =
          popupContent._contentNode.childNodes[0].childNodes[4];

        editMarker.addEventListener("click", (editM) => {
          ikr_edit_popup.style.display = "block";
          // hide the popup on click edit btn
          marker.closePopup();
          // get the dataset id of clicked button
          let id = editMarker.dataset.id;

          latituide_edit.value = e.latlng.lat;
          longtuide_edit.value = e.latlng.lng;

          hiddenMarkerId.value = editMarker.dataset.id;
        });

        // delet the marker
        deleteMarker.addEventListener("click", (ev) => {
          // remove the marker
          map.removeLayer(newMarker);
          // remove from db
          marker_id.value = deleteMarker.dataset.id;
          makeAjaxRequestGlobal(deletemarker_form, get_url.deletMarker);
        });
      });
    }
  });

  //===================================

  // add from functionality
  // ===================================

  ikr_map_form.addEventListener("submit", (evnt) => {
    evnt.preventDefault();

    makeAjaxRequestGlobal(ikr_map_form, get_url.action);

    // featcht data and  add  marker

    setTimeout(() => {
      markerBuind();
    }, 100);
  });

  //===================================
  // add edit functionality
  // ===================================

  ikr_map_form_edit.addEventListener("submit", (evn) => {
    evn.preventDefault();
    makeAjaxRequestGlobal(ikr_map_form_edit, get_url.editMarker);
    setTimeout(() => {
      markerBuind();
    }, 100);
    ikr_edit_popup.style.display = "none";
  });

  // make a function to add marker to the map
  function markerBuind() {
    // Clear existing markers from the map
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
        
          // Open the popup associated with the marker

      
      }
    });

    async function  createMarkers(){
try{
  const data = await     fetchAjaxRequest(get_url.dataF);
  console.log(data);


      data.forEach((m) => {
        const newMarker = L.marker([m.lat, m.lng], { id: m.marker_id }).addTo(
          map
        );

        // enable dragging for each marker
        newMarker.dragging.enable();

        if (m.popup_text == null || m.popup_text === "") {
          // Hide the popup
          newMarker.unbindPopup();
        } else {
          // Bind popup with text and add marker ID to it
          newMarker.bindPopup(
            `<div class="popupWindow">${m.popup_text}<br><button class="editMarker" data-id="${m.marker_id}">Edit</button> <button class="deletMarker" data-id="${m.marker_id}">Delete</button><br>
                      
                    </div>`
          );
          
        }

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

          const editMarker =
            popupContent._contentNode.childNodes[0].childNodes[2];
          const deleteMarker =
            popupContent._contentNode.childNodes[0].childNodes[4];

          editMarker.addEventListener("click", (editM) => {
            ikr_edit_popup.style.display = "block";
            // hide the popup on click edit btn
            marker.closePopup();
            // get the dataset id of clicked button
            let id = editMarker.dataset.id;
            if (id == m.marker_id) {
              latituide_edit.value = m.lat;
              longtuide_edit.value = m.lng;
              popup_text_edit.value = m.popup_text;
              hiddenMarkerId.value = m.marker_id;
            }
          });

          // delet the marker
          deleteMarker.addEventListener("click", (ev) => {
            // remove the marker
            map.removeLayer(newMarker);
            // remove from db
            marker_id.value = deleteMarker.dataset.id;
            makeAjaxRequestGlobal(deletemarker_form, get_url.deletMarker);
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
            popup_text_edit.value = m.popup_text;
            hiddenMarkerId.value = m.marker_id;

            makeAjaxRequestGlobal(ikr_map_form_edit, get_url.editMarker);
          }
        });
      });
     
   


}catch (err) {
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
  });

  //===================================
  // hide the edit popup
  // ===================================

  const hideEdit = document.querySelector(".editClose_btn");
  hideEdit.addEventListener("click", (ev) => {
    ikr_edit_popup.style.display = "none";
  });

  // close this.window
});

// create function to show the marker in the map
