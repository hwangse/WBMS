const mongoose = require('mongoose');

const { Schema } = mongoose;

const piSensorSchema = new Schema({
  id: Number,
  temperature: Number,
  batteryRemain: Number,
  location: String,
  tempMin: Number,
  tempMax: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PiSensor', piSensorSchema);
