const request=require('request');

const forecast=(lat,lon,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=6ea85ea91033ce519151cee4a2cd444d&query='+lat+','+lon;
    request({url:url,json:true},(error,response)=>{
        if (error) {
            callback('Unable to access weather information',undefined) 
        }
        else if(response.body.error){
            callback('No location found',undefined)
        }
        else{
            callback(undefined,
                'The temperature is '+ response.body.current.temperature +' degree celsius. Its '+response.body.current.weather_descriptions[0]+ ' today.')
        }
    })
}

module.exports=forecast;