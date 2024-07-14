
document.addEventListener("DOMContentLoaded",() =>{
  // load the content  after loading the page 

console.log('robin');
  const defaultSetting_form = document.getElementById('defaultSetting');
  const default_lat = document.getElementById('default_lat');

  const default_lng = document.getElementById('default_lng');
  const default_zoom = document.getElementById('default_zoom');
  const default_width = document.getElementById('default_width');
  const default_height = document.getElementById('default_height');

  
const customZoom = document.getElementById('customZoom');
const autoZoom = document.getElementById('autoZoom');
const zoomOption  = document.getElementById('zoomOption');
const showOption  = document.querySelectorAll('.showOption');
 


// get default setting data 
async function getDefault_data (){
  
  try{
      const default_data= await leaflet_fetchAjaxRequest(get_default.featchdata,get_default.ajaxurl);
      console.log(default_data);
default_data.map(d=>{
  default_lat.value = d.Latitude; 
  default_lng.value =d.Longitude; 
  default_zoom.value = d.zoom;
  default_width.value = d.width;
  default_height.value =d.height;
  zoomOption.value= d.zoom_option;
  if(d.zoom_option == 'auto_zoom'){
    autoZoom.checked = true;
    customZoom.checked = false;
  }else{
    autoZoom.checked = false;
    customZoom.checked = true;
    
    showOption.forEach(show =>{
      show.style.display ='flex';
    });
  }

});
  }catch (err) {
      console.log(err);
  }
}

getDefault_data();


customZoom.addEventListener('click', (e) => {
    // Set the value of customZoom
    customZoom.value = 'custom_zoom';

    showOption.forEach(show =>{
      show.style.display ='flex';
    });
    // Clear the value of autoZoom and uncheck it
    autoZoom.value = '';
    autoZoom.checked = false;

    // Check customZoom
    if (!customZoom.checked) {
        customZoom.checked = true;
    }
    zoomOption.value= 'custom_zoom';
});

autoZoom.addEventListener('click', (e) => {
    // Set the value of autoZoom
    autoZoom.value = 'auto_zoom';

    showOption.forEach(show =>{
      show.style.display ='none';
    });
    // Clear the value of customZoom and uncheck it
    customZoom.value = '';
    customZoom.checked = false;
    zoomOption.value= 'auto_zoom';
    // Check autoZoom
    if (!autoZoom.checked) {
        autoZoom.checked = true;
    }
 
});


  defaultSetting_form.addEventListener("submit",(ev) =>{
      ev.preventDefault();
    
      leaflet_makeAjaxRequestGlobal(defaultSetting_form,get_default.default_form,call =>{
 if( call){
  // window.location.href = 'admin.php?page=wp-store-locator-map';
  window.location.reload();

 }
    });
    

  });



});
