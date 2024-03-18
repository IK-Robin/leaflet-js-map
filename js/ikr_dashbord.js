
document.addEventListener("DOMContentLoaded",() =>{
  // load the content  after loading the page 


  const defaultSetting_form = document.getElementById('defaultSetting');

  const default_lat = document.getElementById('default_lat');
  const default_lng = document.getElementById('default_lng');
  const default_zoom = document.getElementById('default_zoom');
  const default_width = document.getElementById('default_width');
  const default_height = document.getElementById('default_height');
  

 


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
  defaultUrl = d.link;

});
  }catch (err) {
      console.log(err);
  }
}

getDefault_data();
console.log(defaultUrl);
  defaultSetting_form.addEventListener("submit",(ev) =>{
      ev.preventDefault();
    
    makeAjaxRequestGlobal(defaultSetting_form,get_default.default_form,call =>{
 if( call){
   window.location.reload();
 }
    });
    

  });



});
