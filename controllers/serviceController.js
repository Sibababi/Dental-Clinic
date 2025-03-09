const Service = require("../models/serviceModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getservice = handlerFactory.getOne(Service);
exports.createservice = handlerFactory.createOne(Service);
exports.updateservice = handlerFactory.updateOne(Service);
exports.deleteservice = handlerFactory.deleteOne(Service);
exports.getAllservice = handlerFactory.getAll(Service);
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
