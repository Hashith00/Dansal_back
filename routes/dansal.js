const express = require("express");
const router = express.Router();

const dansalCOntroller = require("../controllers/dansalController.js");

router.post("/create", dansalCOntroller.createRecord);
router.get("/getall", dansalCOntroller.getAllData);

module.exports = router;
