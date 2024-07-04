const customerController = require('../controllers/cusmoter.controller');
const express = require("express");
const router = express.Router();

router.route("/post").post(customerController.create);
router.route("/get").get(customerController.get);


module.exports = router;