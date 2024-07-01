const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const classSchema  = new Schema({
    name : {type: String, require:true, unique: true },
    availableSeats: {type: Number, require: true},
    price : {type: Number, require: true},
    description: {type: String},
    instructorName: {type: String, require: true},
    status: {type: String, require: true},
    totalEnrolled: {type: Number},
})


module.exports = mongoose.model('Class', classSchema)
