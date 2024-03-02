const express = require("express");
const {makeReservation, uploadData} = require("../controllers/controller.reservation")

const reservationRoute = express.Router();

reservationRoute.post("/add",makeReservation)
reservationRoute.post("/uploadData",uploadData)

module.exports = reservationRoute;