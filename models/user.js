const mongoose = require('mongoose');

const costSchema = new mongoose.Schema({

    id:{
        type:String
    },
    first_name: {
        type:String,
        required:true,

    },
    last_name:{
        type:String,
        required:true,

    },
    birthday: {
        day: {
            type: Number,
            required: true
        },
        month: {
            type: Number,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    }



})

const User = mongoose.model('Users',costSchema);
module.exports = User;