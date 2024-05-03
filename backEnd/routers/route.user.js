const {register,login, getOne,getAllUsers,deleteOneUser,updateUser,getCrew} = require("../controllers/controller.user")
const express = require("express")
const authmiddleware = require('../Middlewares/authMiddleware')

const userRoute = express.Router()

userRoute.post('/register',authmiddleware, register)
userRoute.post('/login', login)
userRoute.get('/getOne',authmiddleware,getOne)
userRoute.get('/getCrew',authmiddleware,getCrew)
userRoute.get('/getAll',getAllUsers)
userRoute.delete('/destroy/:id',authmiddleware,deleteOneUser)
userRoute.patch("/update/:id",authmiddleware,updateUser)



module.exports = userRoute;