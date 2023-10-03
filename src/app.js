const express = require('express');
const app = express();
const hbs = require('hbs');
const routes = require('./routes/main');
const mongoose = require('mongoose');
const bodyParser= require('body-parser')
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const Service = require('./models/Service')


//static/css/style.css
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes);


//(template engine)
app.set('view engine','hbs')
app.set('views','views')
hbs.registerPartials("views/partials")

//db connect
async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/vanteo');
      console.log('DB Connected');

      // Service.create([
      //   {
      //     icon:'fa-solid fa-hand-holding-medical',
      //     title:'Provide Best Health-care',
      //     description:'The improvement of health through the prevention, diagnosis, treatment, amelioration, or cure of disease, illness, injury, and other physical and mental impairments in people is referred to as health care.',
      //     linkText:'Check',
      //     link:'https://www.g2.com/categories/healthcare-service',
      //   },
      //   {
      //     icon:'fa-solid fa-capsules',
      //     title:'Medicines',
      //     description:'Medicines are intended to help us live longer and healthier, but taking medicines the wrong way or mixing certain drugs and supplements can be dangerous.',
      //     linkText:'Order',
      //     link:'https://www.drugs.com/  '
      //   },
      //   {
      //     icon:'fa-solid fa-people-arrows',
      //     title:'1-1 Physican Expert Consultancy',
      //     description:'A Consultant Doctor typically works in a hospital, and their main duty is to carry out the investigations and procedures necessary to establish a diagnosis, and then to give advice and provide treatment to the patient.',
      //     linkText:'Consult',
      //     link:'https://dribbble.com/tags/doctor_website'
      //   },
      // ])




      // Slider.create([
      //   {
      //     title:'Health is the greatest of human blessings." – Hippocrates.',
      //     subTitle:"He who has health has hope and he who has hope has everything.” “Let's build wellness rather than treat disease.” “A healthy outside starts from the inside.” “It is health that is real wealth and not pieces of gold and silver.",
      //     imageUrl:"/static/images/s1.jpg"
      //   },
      //   {
      //     title:'Good health is a crown on the head of a well person that only a sick person can see." – Rohit Sharma',
      //     subTitle:"This quote by the ancient Roman poet reminds us that, no matter what our financial or material possessions may be, our health is our most valuable asset. It's essential to take care of ourselves and prioritise our wellbeing if we want to lead a happy and fulfilling life.",
      //     imageUrl:"/static/images/s2.jpg"
      //   },
      //   {
      //     title:'The greatest wealth is health." – Virgil.',
      //     subTitle:"Having good health is a synonym for being physically and mentally fit. We should not ignore our health, and always stay alert in case we feel uneasy. We should exercise regularly to stay healthy. We should take care of our mental health by practising meditation",
      //     imageUrl:"/static/images/s3.jpg"
      //   },
      // ])



      // Detail.create({
      //   brandName:"Human Line - Vanteo",
      //   brandIconUrl:"https://img.freepik.com/premium-vector/consulting-logo-icon_412311-3247.jpg?w=740",
      //   links:[{
      //     label:"Home",
      //     url:"/",
      //   },{
      //     label:"Services",
      //     url:"/services"
      //   },{
      //     label:"Gallery",
      //     url:"/gallery"
      //   },{
      //     label:"About",
      //     url:"/about"
      //   },{
      //     label:"Contact Us",
      //     url:"/contact-us"
      //   }
      // ]
      // }); 
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  }
  connectToDatabase();

app.listen(process.env.PORT | 5556 ,()=>{
    console.log("Server Started! ")
});