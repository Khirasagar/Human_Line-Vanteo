// const mongoose = require('mongoose');

// const Slider = mongoose.Schema({
//     title:String,
//     subTitle:String,
//     imageUrl:String
// });

// module.exports = mongoose.model('slider',Slider);

const mongoose = require('mongoose');

// Define the schema for your Slider model
const sliderSchema = mongoose.Schema({
    title: String,
    subTitle: String,
    imageUrl: String,
    class: String,
});

// Register the schema with Mongoose and create the model
// 'slider' is the model name, and sliderSchema is the schema
const Slider = mongoose.model('slider', sliderSchema);

module.exports = Slider;
