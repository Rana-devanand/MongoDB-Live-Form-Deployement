const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
     name :{
          type: String,
          required: true
     },
     email :{
          type: String,
          required: true
     },
     password :{
          type: String,
          required: true
     }
});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;