document.addEventListener("DOMContentLoaded", () => {

  const mapWidth = document.getElementById("map");
  
    const map = L.map("map");
   let defaultUrl  = null;
  // Set the view of the map using the configuration data
  async function add_defaultView() {
    let lat,lng;
    try {
      const data1 = await fetchAjaxRequest(get_url.featchdata,get_url.ajaxurl);

      data1.forEach((data) => {
        console.log(data);
         lat = data.Latitude;

         lng = data.Longitude;
        const zoom = data.zoom;
        const width = data.width;
        const height = data.height;
        defaultUrl = data.link
     
// add height and width control 
mapWidth.style.widows = data.width + '%'; 
mapWidth.style.height= data.height +'px';

        function getConfigData() {
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

    } catch (error) {
      console.error("Error fetching data from first AJAX request:", error);
    }
  }

  add_defaultView();





  function markerBuind() {
    // Clear existing markers from the map

    async function createMarkers() {
      try {
        const data = await fetchAjaxRequest(get_url.dataF,get_url.ajaxurl);
        
      
        data.forEach((m) => {
          const newMarker = L.marker([m.lat, m.lng], { id: m.marker_id }).addTo(
            map
          );

        
          // Hide the popup

          // Bind popup with text and add marker ID to it
          newMarker.bindPopup(
            `<div class="popupWindow">
            
          <p> <strong> Address:</strong>  ${m.address}</p> 
            <p>  <strong>Sales Phone : </strong>  ${m.phone}</p>
           <p> <strong> GeneralHours :</strong>   ${m.email} </p>
            
    
           <p>  <strong> Website:</strong> <a href="${m.urls ==''?defaultUrl:m.urls}" target="_blunk">${ m.urls ==''?defaultUrl:m.urls}</a> </p>
            
            
            <br>
            
            
            
            
       
                    </div>`
         ,{ autoPan: true } );

          // Open popup for each marker


        
        });
      } catch (err) {
        console.log(err);
      }
    }

    createMarkers();

    // Fetch new data and add markers
  }




  
  function fetchAjaxRequest(actions,ajaxurl) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", ajaxurl, true);
      xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8"
      );
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
              resolve(response.data);
            } else {
              reject(response.error);
            }
          } else {
            reject(xhr.statusText);
          }
        }
      };
  
      xhr.send(`action=${actions}`);
    });
  }


});