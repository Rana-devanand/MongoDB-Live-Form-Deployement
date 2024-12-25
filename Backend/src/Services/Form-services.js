const FormRepository = require("../repository/form-repo");

class FormServices {
     constructor(){
          this.formRepository = new FormRepository();
     }

     async createForm (UserData) {
          try {
               const response = await this.formRepository.createForm(UserData);
               return response;
          } catch (error) {
               console.error("Something went wrong in services");
               throw {error};
          }
     }

     async getAllUsers () {
          try {
               const response = await this.formRepository.getAllUsers();
               return response;
          } catch (error) {
               console.error("Something went wrong in services");
               throw {error};
          }
     }
}

module.exports = FormServices;
