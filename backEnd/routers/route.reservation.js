const express = require("express");
const {getAllReservations, uploadData,getOneReservation,cancelReservation,confirmeReservation} = require("../controllers/controller.reservation")
const authmiddleware = require('../Middlewares/authMiddleware')
const reservationRoute = express.Router();

reservationRoute.get("/getAllReservations",getAllReservations)
reservationRoute.post("/uploadData",uploadData)
reservationRoute.get("/getOneRes/:profileType",authmiddleware,getOneReservation)
reservationRoute.patch("/cancelRes",authmiddleware,cancelReservation)
reservationRoute.patch("/confirmeReservation",authmiddleware,confirmeReservation)


module.exports = reservationRoute;