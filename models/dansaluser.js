const mongoose = require("mongoose");

const dansalShema = new mongoose.Schema({
  amOrPm: {
    type: String,
    required: [true, "Please provide AM or PM."],
    enum: ["AM", "PM"],
  },
  date: {
    type: String,
    required: [true, "Please provide the date."],
  },
  district: {
    type: String,
    required: [true, "Please provide the district."],
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
    required: [true, "Please provide the location."],
  },
  name: {
    type: String,
    required: [true, "Please provide the name."],
  },
  numberOfPeople: {
    type: Number,
    required: [true, "Please provide the number of people."],
  },
  organization: {
    type: String,
    required: [true, "Please provide the organization."],
  },
  province: {
    type: String,
    required: [true, "Please provide the province."],
  },
  startLocationLat: {
    type: Number,
    required: [true, "Please provide the start location latitude."],
  },
  startLocationLong: {
    type: Number,
    required: [true, "Please provide the start location longitude."],
  },
  startingTime: {
    type: String,
    required: [true, "Please provide the starting time."],
  },
});

const Dansal = mongoose.model("dansal", dansalShema);

module.exports = Dansal;
