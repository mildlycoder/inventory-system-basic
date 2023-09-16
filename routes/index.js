const express = require('express');
const router = express.Router();
const Category = require('../models/category')

/* GET home page. */
router.get('/', async(req, res, next) => {
  res.redirect('/category');
});


module.exports = router;
