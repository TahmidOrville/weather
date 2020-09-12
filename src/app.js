const express=require('express');
const app=express();
const forecast=require('./utils/forecast');
const geoMap=require('./utils/geoMap');
const cors = require('cors')

app.use(cors());
app.get('/weather',(req,res)=>{
    
    if (!req.query.address) {
        return res.send({
            error:"Please provide an address"
        })
    }

    geoMap(req.query.address,(error,data)=>{
        if (error) {
            return res.send({error})
        }
        forecast(data.latitude,data.longitude,(error,forecastData)=>{
            if (error) {
               return res.send({error})
            }
            
            res.send({
                forecast:forecastData,
                location:data.location,
                address:req.query.address
            })

        })
    })


})

app.listen(3000,()=>{
    console.log('port 3000 run successfully');
})