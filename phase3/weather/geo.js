const request = require('request')
const url = 'https://api.darksky.net/forecast/0f117a9db5a9407fd73d76e7555804b1/37.8267,-122.4233'

request({url:url,json : true } , (error , respose)=>{
console.log(respose.body.daily.data[0].summry + " it is currently "+ respose.body.currently.temperature + " degrees out . there is a " + respose.body.currently.precipIntensity+ "  % chance of raining ")
})

const geocodeURL = 
'https://api.mapbox.com/geocoding/v5/mapbox.places/Bengaluru.json?access_token=pk.eyJ1Ijoic2hhbGluaTk4IiwiYSI6ImNqejRsZDVlZDAybzEzZW56NXpxYTRwdG0ifQ.V_Oz9BJ972Q9Qvh9wMnpQQ&limit=1'

request({url : geocodeURL , json : true} , (error , response)=>{
const latitute = response.body.features[0].center[0]
const longitude = response.body.features[0].center[1]
console.log(latitute,longitude)
})