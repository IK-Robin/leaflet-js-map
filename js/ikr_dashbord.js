// load the content  after loading the page 

document.addEventListener("DOMContentLoaded",() =>{
    const defaultSetting_form = document.getElementById('defaultSetting');
    // add submit event  listener to form
    console.log(defaultSetting_form);

async function getDefault_data (){
    
    try{
        const default_data= await fetchAjaxRequest(get_url.featchdata);
    console.log(default_data);
    }catch (err) {
        console.log(err);
    }
}

getDefault_data();

    defaultSetting_form.addEventListener("click",(ev) =>{
        ev.preventDefault();
      
      
      
        fetchAjaxRequest(get_url.featchdata,(data) =>{
            console.log(data);
        });
    });
 

});