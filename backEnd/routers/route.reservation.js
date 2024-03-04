const express = require("express");
const {getAllReservations, uploadData,getOneReservation,cancelReservation} = require("../controllers/controller.reservation")

const reservationRoute = express.Router();

reservationRoute.get("/getAllReservations",getAllReservations)
reservationRoute.post("/uploadData",uploadData)
reservationRoute.get("/getOneRes/:UserId",getOneReservation)
reservationRoute.patch("/cancelRes",cancelReservation)


module.exports = reservationRoute;