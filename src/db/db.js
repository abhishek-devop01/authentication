const mongoose = require('mongoose')


function connectDB(){
     mongoose.connect(process.env.MONGODB_URI)
     .then(()=>{
          console.log('connected to DB...')
     })
     .catch((e)=>{
          console.log('something went wrong...',e);        
     })
}

module.exports = connectDB