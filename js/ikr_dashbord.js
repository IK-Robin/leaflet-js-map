// load the content  after loading the page 

document.addEventListener("DOMContentLoaded",() =>{
    const defaultSetting_form = document.getElementById('defaultSetting');
    // add submit event  listener to form
    console.log(defaultSetting_form);
    defaultSetting_form.addEventListener("click",(ev) =>{
        ev.preventDefault();
        fetchAjaxRequest(get_url.featchdata,(data) =>{
            console.log(data);
        })
    });
 

});