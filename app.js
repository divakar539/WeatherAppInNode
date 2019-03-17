const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const details = require('./details');

var weather;
app.set('view engine', 'ejs')
app.use(express.static('styles'));  
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null})
})



app.post('/', function (req, res) {
    let city = req.body.city;
    details.getWeatherData(city).then((data) => {
        let weather = data; 
        if(weather && weather.main){
          let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
          res.render('index', {weather: weatherText, error: null});
        } else {
          res.render('index', {weather: null, error: 'Error, please try again'});
        }
    }).catch((err) => { 
        console.log(err)
        res.render('index', {weather: null, error: 'Error, please try again'})
      });
    // console.log(response)
    // if(response){
    //   let weather = response; 
    //   if(weather && weather.main){
    //       console.log(weather);
    //     let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    //     res.render('index', {weather: weatherText, error: null});
    //   } else {
    //     res.render('index', {weather: null, error: 'Error, please try again'});
    //   }
    // }else{
    //     res.render('index', {weather: null, error: 'Error, please try again'}); 
    // }
//     request(url, function (err, response, body) {
//       if(err){
//         res.render('index', {weather: null, error: 'Error, please try again'});
//       } else {
//         let weather = JSON.parse(body)
//         if(weather && weather.main){
//             let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//             res.render('index', {weather: weatherText, error: null});
//         } else {
//             res.render('index', {weather: null, error: 'Error, please try again'});
//         }
//       }
// })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});