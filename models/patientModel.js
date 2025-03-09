const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  name : {
      required : [true , 'must enter name'],
type : String,
    },
    age : {
      required : [true , 'must enter age'],
type : Number,
    },
    gender : {
      required : [true , 'must enter gender'],
type : String,
enum: ["ذكر", "انثى"],
    },
    phone: {
      type: String,
      required: [true, "يجب ادخال رقم هاتف"],
      validate: {
        validator: (el) => {
          /(\+963\d{9}|09\d{8})/.test(el);
        },
        message: "الرقم غير صيحيح",
      },
    },

},{
      timestamps: true,
      versionKey: false
    });
    const Patient = mongoose.model("Patient", patientSchema);
    module.exports = Patient;
    