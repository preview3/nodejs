const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: Number, required: true, unique: true },
  branch: { type: String, required: true },
});

module.exports = mongoose.model("Student", StudentSchema);
