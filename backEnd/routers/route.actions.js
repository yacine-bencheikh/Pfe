const express = require('express');
const { getAllActions } = require('../controllers/controller.actions');

const authmiddleware = require('../Middlewares/authMiddleware');

const actionsRoute = express.Router();

actionsRoute.get('/getAllActions', getAllActions);

module.exports = actionsRoute;