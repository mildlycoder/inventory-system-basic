const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Category = new mongoose.model('category', categorySchema)
module.exports =  Category;
