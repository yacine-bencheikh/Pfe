const {makeReservation} = require("../controllers/controller.reservation")
const express = require("express");

const reservationRoute = express.Router();

reservationRoute.post("/add",makeReservation)

module.exports = reservationRoute;