
const request=require('request');

const geoLocation=(address,callback)=>{

    const urlGeo='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoib3J2aWxsZTExIiwiYSI6ImNrZXN2anl2MDFmeHgyd29lOTV4dmZjMzUifQ.aKN8gzbHO2ZQuJ2lVgn3Ug&limit=1';
    request({url:urlGeo,json:true},(error,response)=>{
        if (error) {
            callback("Unable to access location",undefined)
        }
        else if(response.body.features.length===0){
                callback("No location found.Try another search",undefined)
        }
        else{
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }

    })

}

module.exports= geoLocation;
