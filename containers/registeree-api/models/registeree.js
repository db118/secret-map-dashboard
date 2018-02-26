const mongoose = require("mongoose");

// eslint-disable-next-line
let registereeSchema = mongoose.Schema({
  registereeId: {type: String, unique: true},
  calories: Number,
  steps: Number,
});

module.exports = mongoose.model("Registeree", registereeSchema);