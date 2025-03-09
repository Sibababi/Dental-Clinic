const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema({
  name : {
      required : [true , 'must enter name'],
type : String,
    },
    cost : {
      required : [true , 'must enter cost'],
type : Number,
    },
    
},{
      timestamps: true,
      versionKey: false
    });
    const Service = mongoose.model("Service", serviceSchema);
    module.exports = Service;
    