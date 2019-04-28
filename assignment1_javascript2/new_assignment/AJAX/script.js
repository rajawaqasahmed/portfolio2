//AJAX and Typescript
//Part 1:

$.ajax({
    url: "http://www.amiiboapi.com/api/amiibo/?name=mario", 
    success: function(text) {
        console.log(text);
        }
});

