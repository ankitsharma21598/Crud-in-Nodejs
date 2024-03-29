const express = require('express');
const route = express.Router();

const services = require('../services/render');

/**
 * @description for Root Route
 * @method GET /
 * 
 *  */ 

route.get('/',services.homeRoutes);
/**
 * @description for add users
 * @method GET /add-user
 */
route.get('/add-user',services.add_user);

/**
 * @description for update user
 * @method GET /update-user
 * 
 */
route.get('/update-user',services.update_user);

module.exports = route;
