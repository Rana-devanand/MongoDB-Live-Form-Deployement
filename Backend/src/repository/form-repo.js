const Form = require("../Models/form-model")

class FormModel {
     async createForm (UserData) {
          try {
               console.log("Creating Form Model" , UserData);
               const response = await Form.create(UserData);
               return response;
          } catch (error) {
               console.error("Something went wrong in repository");
               throw {error};
          }
     }

     async getAllUsers () {
          try {
               console.log("Getting all users");
               const response = await Form.find();
               return response;
          } catch (error) {
               console.error("Something went wrong in repository");
               throw {error};
          }
     }
}

module.exports = FormModel;