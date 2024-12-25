const FormServices = require("../Services/Form-services");

const formservices = new FormServices();

const createForm = async (req, res) => {
     try {
          const response = await formservices.createForm(req.body);
          res.status(201).json({
               data: response,
               message: "Data Inserted successfully",
               success: true,
               err : {},
          });
     } catch (error) {
          console.error(error);
          res.status(500).json({
               data: {},
               message: "Something went wrong",
               success: false,
               err : error,
           });
     }
}

const getAll = async (req, res) => {
     try {
          const response = await formservices.getAllUsers();
          res.status(200).json({
               data: response,
               message: "Data fetched successfully",
               success: true,
               err : {},
          });
     } catch (error) {
          console.error(error);
          res.status(500).json({
               data: {},
               message: "Something went wrong",
               success: false,
               err : error,
           });
     }
}

module.exports= {
     createForm,
     getAll
}