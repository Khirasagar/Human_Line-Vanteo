const express = require('express')
const {route} = require('express/lib/application')
const routes = express.Router();
const Detail = require('../models/Detail');
const Slider = require('../models/Slider');
const Service = require('../models/Service');
const Contact = require('../models/Contact');

routes.get("/",async(req,res)=>{
    const details = await Detail.findOne({"_id":"651807752b64605686b6e204"});
    const sliderSchema = await Slider.find()
    const services = await Service.find()
    //console.log(details)
    // console.log(sliderSchema);

    res.render("index",{
        details:details,
        slides:sliderSchema,
        services:services  
    })
})

routes.get("/gallery", async(req,res)=>{
    const details = await Detail.findOne({"_id":"651807752b64605686b6e204"});
    res.render("gallery",{
        details:details
    })
});
//process contact form
routes.post("/process-contact-form",async(request,response) =>{
     console.log("Form is submitted");
     console.log(request.body);
     //save the data
     try {
        const data = await Contact.create(request.body)
        console.log("123",data)
            response.redirect("/")
     } catch (error) {
        console.log(error)
        response.redirect("/")
     }
})

module.exports = routes;
