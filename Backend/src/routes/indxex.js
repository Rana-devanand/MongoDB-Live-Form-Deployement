const express = require('express');
const Router = express.Router();

const FormController = require("../controllers/Form-controllers")


Router.post('/form' , FormController.createForm);
Router.get('/allusers' , FormController.getAll);

module.exports = Router;
