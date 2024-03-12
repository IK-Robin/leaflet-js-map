  // make a function to add marker to the map
 







// create ajax function

function makeAjaxRequestGlobal(fromdata, action, callback) {
    var formData = new FormData(fromdata);
    formData.append("action", action);
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", ajaxurl, true);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          // Call the provided callback function with the response data
        } else {
          // Handle error message or any other action
        }
      }
    };
    xhr.send(formData);
  }
  
  // featch data functuon
  
  function fetchAjaxRequest(actions, callback) {
    xhr = new XMLHttpRequest();
    xhr.open("POST", ajaxurl, true);
    xhr.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        // console.log(response);
        if (response.success) {
          callback(response.data); // Call the function to display data
        } else {
          // console.error(response);
        }
      }
    };
  
    xhr.send(`action=${actions}`); // Send the AJAX request to fetch data
  }
  