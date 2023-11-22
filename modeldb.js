const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    FirstName: "String",
    LastName: "String",
    Age: "Number",
  },
  {
    //quand les donnees sont inseres
    timestamps: true,
  }
);

const ListST = mongoose.model("Student", schema);
module.exports = ListST;
