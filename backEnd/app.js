const express = require('express');
require('dotenv').config()
const app = express();
const connection = require('./models/models');
const userRoute = require("./routers/route.user")
const reservationRoute = require("./routers/route.reservation")
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/api/users",userRoute)
app.use("/api/reservations",reservationRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`lisning on port ${process.env.PORT}`);
})