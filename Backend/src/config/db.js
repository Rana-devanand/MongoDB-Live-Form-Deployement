const mongoose = require('mongoose');
const {MONGO_URL}= require("./config.js")
console.log(MONGO_URL)
const connect =  async () => {
     try {
          await mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
          console.log('Connected to MongoDB');
     } catch (error) {
          console.error('Failed to connect to MongoDB', error);
     }
}
module.exports = connect;