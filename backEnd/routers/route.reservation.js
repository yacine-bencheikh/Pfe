const express = require("express");
const {getAllReservations, uploadData,getOneReservation,cancelReservation,confirmeReservation} = require("../controllers/controller.reservation")

const reservationRoute = express.Router();

reservationRoute.get("/getAllReservations",getAllReservations)
reservationRoute.post("/uploadData",uploadData)
reservationRoute.get("/getOneRes/:profileType",getOneReservation)
reservationRoute.patch("/cancelRes",cancelReservation)
reservationRoute.patch("/confirmeReservation",confirmeReservation)


module.exports = reservationRoute;