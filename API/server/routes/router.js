const express = require('express');
const route = express.Router();

const controller = require("../controller/contact.controller");

// Contact API
route.get("/contact/:id", controller.findContact)
route.get("/contact", controller.findAllContact)
route.post("/contact", controller.postContact)
route.put("/contact", controller.updateContact)
route.delete("/contact", controller.deleteContact)

module.exports = route;