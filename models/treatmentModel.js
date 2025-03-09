const mongoose = require("mongoose");
const treatmentSchema = new mongoose.Schema({
  treatment : {
type : mongoose.Schema.ObjectId,
ref : 'Treatment'
  },
  patient : {
      required : [true , 'must enter patient'],
type : mongoose.Schema.ObjectId,
ref : 'Patient'
    },
    details:{
      service : {
        required : [true , 'must enter service'],
  type : mongoose.Schema.ObjectId,
  ref : 'Service'
      },
      numSession: {
        required : [true , 'must enter number session'],
  type : Number,
      },
      tooth : {
        required : [true , 'must enter tooth'],
  type : String,
      },
      notes : {
  type : String,
      },
    paid : {
      required : [true , 'must enter paid'],
type : Number,
    },
    date : {
      required : [true , 'must enter date'],
type :Date,

    },},
    remaining_amount : {
      type : Number,
          },

    
},{
      timestamps: true,
      versionKey: false
    });
    const Treatment = mongoose.model("Treatment", treatmentSchema);
    module.exports = Treatment;
    