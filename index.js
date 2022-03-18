
require('dotenv').config();

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL
};

// import the express library
const express = require("express");

// import cors to allow running backend on same machine as frontend.
const cors = require("cors");

// import router from routers.js
const { router } = require("./routers");

// define server instance
let app = express();
app.use(cors());
app.use(express.json());
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// API mappings
app.use(router);

// start the server at port 3000
app.listen(process.env.PORT, (errors) => {
    if (errors) {
      console.log(errors);
    } else {
      console.log('NUS Money Server started on port',process.env.PORT);
    }
  });
  