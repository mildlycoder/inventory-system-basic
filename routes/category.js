const express = require('express');
const router = express.Router();
const Category = require('../models/category')
const Car = require('../models/car')
const mongoose = require('mongoose')
/* GET home page. */
router.get('/', async(req, res, next) => {
    const categories = await Category.find()
    res.render('index', { title: 'Car inventory', categories});
});

router.get('/:id', async(req, res, next)=> {
  const id = req.params.id;
  const category = await Category.findById(id)
  const cars = await Car.find({category: id})
    console.log(cars)
  res.render('category', { title: 'Car category: ', category, cars });
})

router.post('/create', async(req, res, next)=>{
    const newCategory = await Category.create(req.body);
    console.log(newCategory)
    res.redirect('/')
})

module.exports = router;
