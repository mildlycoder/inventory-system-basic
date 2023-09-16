const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    numbers: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
}, {timestamps: true})

const Car = new mongoose.model('car', carSchema)
module.exports =  Car;
