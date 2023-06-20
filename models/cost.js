const mongoose = require('mongoose');

const costSchema = new mongoose.Schema({

    user_id:{
        type:String
    },
    year: {
        type:Number,
        required:true,
        min:0
    },
    month:{
        type:Number,
        required:true,
        min:1,
        max:12
    },
    day:{
        type:Number,
        required:true,
        min:1,
        max:31
    },
    description:{
        type:String,
        required:true

    },
    category:{
        type: String,
        enum:['food','health','housing','sport',
            'education','transportation','other'],
        lowercase:true
    },
    sum:{
        type:Number,
        required:true
    }

})

const Cost = mongoose.model('Cost',costSchema);
module.exports = Cost;