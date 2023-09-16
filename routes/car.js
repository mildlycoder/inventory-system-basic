const express = require('express');
const router = express.Router();
const Category = require('../models/category')
const Car = require('../models/car')

router.post('/create', async (req, res, next) => {
    try {
      // Create a new car using the data from req.body
      console.log(req.body)
      const newCar = await Car.create(req.body);
      // Redirect to a relevant page or send a response
      res.redirect('/'); // Redirect to the homepage
    } catch (error) {
      // Handle errors here, e.g., send an error response
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

//   router.get('/demo', async (req, res, next) => {
//     try {
//       // Create a new car using the data from req.body
//       const newCar = await Car.create({name: 'swift deez nuts', numbers:14, category: '6505cbe364299779b0d620bc'});
//       console.log(newCar)
//     } catch (error) {

//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  


module.exports = router;
