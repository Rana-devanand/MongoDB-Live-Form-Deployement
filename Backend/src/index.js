const express = require('express');
const app = express();
const {PORT} = require('./config/config.js');
const ApiRoute = require("./routes/indxex.js")
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Database Connectivity check
const connect = require('./config/db.js');


app.use("/api" , ApiRoute);
const setupAndStartServer = async () => {

     app.listen(PORT , () => {
          console.log(`Server is running on port ${PORT}`);
     })
     connect();
}
setupAndStartServer();