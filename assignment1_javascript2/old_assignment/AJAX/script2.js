//http://www.amiiboapi.com/api/amiibo/?name=mario

//AJAX and Typescript 
//Part 2:

function myVanillaAjaxReq(link, myCallbackFunc) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState === 4) {
      if (req.status === 200) {
        var myData = JSON.parse(req.responseText);
        if (myCallbackFunc) {
          myCallbackFunc(myData);
        }
      }
    }
  };
  req.open('GET', link);
  req.send();
}

//Call function with arguments
myVanillaAjaxReq('http://www.amiiboapi.com/api/amiibo/?name=mario', function(fetchedData) {
  console.log(fetchedData);
});
