// To import express library
const express = require("express");
const { auth, requiresAuth } = require('express-openid-connect');

// define a router object
let router = express.Router();

// define a GET API with path "/home"
router.get("/", (request, response) => {
  console.log(request.oidc.isAuthenticated());
  response.send(request.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.get("/profile",requiresAuth(),(request,response)=>{
  response.send(JSON.stringify(request.oidc.user));
});

// define a GET API with path "/home"
router.get("/home", (request, response) => {
  response.send("Welcome to NUS Money Backend!");
});

// define a GET API with path "/home"
router.get("/test", (request, response) => {
  response.send("Welcome to NUS Money Backend Test Page!");
});

module.exports = { router };