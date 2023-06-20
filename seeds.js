const mongoose = require('mongoose');
const User=require('./models/user');

mongoose.connect("mongodb+srv://tamirb10:b9649263@cluster0.3tt7yh6.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> {
        console.log("MONGO CONNECTION WORK")
    }).catch(err => {
    console.log("MONGO Not working")
    console.log(err)
})



const p = new User({

        id: "123123",
    first_name: "moshe",
    last_name: "israeli",
        birthday: {
            day: 10,
            month: 1,
            year: 1990

    }

})

p.save().then((p)=>
{
console.log(p)
}).catch(err => {
    console.log(err)
})

