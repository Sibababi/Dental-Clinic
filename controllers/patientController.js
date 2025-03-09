const Patient = require("../models/patientModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getpatient = handlerFactory.getOne(Patient);
exports.createpatient = handlerFactory.createOne(Patient);
exports.updatepatient = handlerFactory.updateOne(Patient);
exports.deletepatient = handlerFactory.deleteOne(Patient);
exports.getAllpatient = handlerFactory.getAll(Patient);
exports.defult = catchAsync(async (req, res, next) => {
  //write your code here
  const doc = []
  if(!doc){
    return (new AppError("Message Error",400))
    }
  res.status(200).json({
    status: "success",
    doc,
  });
});
