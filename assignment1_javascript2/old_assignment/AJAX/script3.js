// http://www.amiiboapi.com/api/amiibo/?name=mario
//Part 4

fetch('http://www.amiiboapi.com/api/amiibo/?name=mario')
  .then((res) => {
      return res.json()
  })
  .then(myJsRes => {
      console.log(myJsRes);
  })