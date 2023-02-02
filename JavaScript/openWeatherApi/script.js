const apiKey='GNGA52M6XAP89G3G3AUGRDRTM';
const city="pune";

fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`, {
  "method": "GET",
  "headers": {
  }
  })
.then(response => response.json())  
.then(data=>{console.log(data)

})
.catch(err => {
  console.error(err);
});