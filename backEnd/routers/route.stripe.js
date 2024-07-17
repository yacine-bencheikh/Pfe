const express = require("express");
const {stripePayment} = require("../controllers/controller.stripe")
const stripeRoute = express.Router();

stripeRoute.post("/stripePayment",stripePayment)

module.exports = stripeRoute;