const {register,login, getOne,getAllUsers,deleteOneUser,updateUser} = require("../controllers/controller.user")
const express = require("express")
const authmiddleware = require('../Middlewares/authMiddleware')

const userRoute = express.Router()

userRoute.post('/register', register)
userRoute.post('/login', login)
userRoute.get('/getOne',authmiddleware,getOne)
userRoute.get('/getAll',getAllUsers)
userRoute.delete('/destroy/:id',deleteOneUser)
userRoute.patch("/update/:id",updateUser)



module.exports = userRoute;