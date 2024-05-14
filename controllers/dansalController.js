const Dansal = require("../models/dansaluser");

exports.createRecord = async (req, res) => {
  try {
    const {
      amOrPm,
      date,
      district,
      isOpen,
      location,
      name,
      numberOfPeople,
      organization,
      province,
      startLocationLat,
      startLocationLong,
      startingTime,
    } = req.body;

    const newRecord = new Dansal({
      amOrPm,
      date,
      district,
      isOpen,
      location,
      name,
      numberOfPeople,
      organization,
      province,
      startLocationLat,
      startLocationLong,
      startingTime,
    });

    await newRecord.save();

    res.status(201).json({
      status: "success",
      data: {
        record: newRecord,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const allData = await Dansal.find();

    res.status(200).json({
      status: "success",
      data: {
        dansal: allData,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
