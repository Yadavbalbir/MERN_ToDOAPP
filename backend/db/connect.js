const mongoose = require('mongoose');

const connectToMongo = (url) => {
    mongoose.connect(url, ()=>{
        console.log("connected to mongo successfully")
    })
}


module.exports = connectToMongo;