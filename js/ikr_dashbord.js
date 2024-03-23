
document.addEventListener("DOMContentLoaded",() =>{
  // load the content  after loading the page 


  const defaultSetting_form = document.getElementById('defaultSetting');
  const default_lat = document.getElementById('default_lat');

  const default_lng = document.getElementById('default_lng');
  const default_zoom = document.getElementById('default_zoom');
  const default_width = document.getElementById('default_width');
  const default_height = document.getElementById('default_height');

  
const customZoom = document.getElementById('customZoom');
const autoZoom = document.getElementById('autoZoom');
const zoomOption  = document.getElementById('zoomOption');

 


// get default setting data 
async function getDefault_data (){
  
  try{
      const default_data= await fetchAjaxRequest(get_default.featchdata);
default_data.map(d=>{
  default_lat.value = d.Latitude; 
  default_lng.value =d.Longitude; 
  default_zoom.value = d.zoom;
  default_width.value = d.width;
  default_height.value =d.height;


});
  }catch (err) {
      console.log(err);
  }
}

getDefault_data();


customZoom.addEventListener('click', (e) => {
    // Set the value of customZoom
    customZoom.value = 'custom_zoom';


    // Clear the value of autoZoom and uncheck it
    autoZoom.value = '';
    autoZoom.checked = false;

    // Check customZoom
    if (!customZoom.checked) {
        customZoom.checked = true;
    }
    customZoom.value= 'custom_zoom';
});

autoZoom.addEventListener('click', (e) => {
    // Set the value of autoZoom
    autoZoom.value = 'auto_zoom';


    // Clear the value of customZoom and uncheck it
    customZoom.value = '';
    customZoom.checked = false;

    // Check autoZoom
    if (!autoZoom.checked) {
        autoZoom.checked = true;
    }
    zoomOption.value= 'auto_zoom';
});


  defaultSetting_form.addEventListener("submit",(ev) =>{
      ev.preventDefault();
    
    makeAjaxRequestGlobal(defaultSetting_form,get_default.default_form,call =>{
 if( call){
  //  window.location.reload();
 }
    });
    

  });



});
