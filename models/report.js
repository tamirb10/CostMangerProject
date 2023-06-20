const mongoose = require('mongoose');

const costSchema = new mongoose.Schema({
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
    user_id:{
        type:String,
        required:true
    },
    food: { type: Array, default: [] },
    health: { type: Array, default: [] },
    housing: { type: Array, default: [] },
    sport: { type: Array, default: [] },
    education: { type: Array, default: [] },
    transportation: { type: Array, default: [] },
    other: { type: Array, default: [] },
});

const Report = mongoose.model('Report', costSchema);
module.exports = Report;