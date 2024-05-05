const express = require("express");
const router = express.Router();
const { db } = require("../firebase.js");

router.get("/read/:district", async (req, res) => {
  try {
    const responce = await db.collection("dansal").get();
    let responcearray = [];
    responce.forEach((doc) => {
      if (doc.data().district == req.params.district) {
        responcearray.push(doc.data());
      }
    });
    res.send(responcearray);
  } catch (e) {
    res.send(e);
  }
});

router.get("/readall", async (req, res) => {
  try {
    const responce = await db.collection("dansal").get();
    let responcearray = [];
    responce.forEach((doc) => {
      responcearray.push(doc.data());
    });
    res.send(responcearray);
  } catch (e) {
    res.send(e);
  }
});

router.post("/create/", async (req, res) => {
  try {
    const id = req.body.email;
    const userjson = {
      name: req.body.name,
      oranization: req.body.oranization,
      date: req.body.date,
      location: req.body.location,
      district: req.body.district,
      province: req.body.province,
      startingTime: req.body.startingTime,
      amOrpm: req.body.amOrpm,
      isOpen: req.body.isOpen,
      numberOfPeopple: req.body.numberOfPeopple,
      startLocationLan: req.body.startLocationLan,
      startLocationLong: req.body.startLocationLong,
    };

    const responce = await db.collection("dansal").add(userjson);
    res.send(responce);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
