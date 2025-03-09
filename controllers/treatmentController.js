const Treatment = require("../models/treatmentModel");
const  Service = require("../models/serviceModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.gettreatment = handlerFactory.getOne(Treatment, 
   {path:"patient",select:"name  -_id"},
   {path:"details.service",select:"name  -_id"});
exports.createtreatment = handlerFactory.createOne(Treatment);
exports.updatetreatment = handlerFactory.updateOne(Treatment);
exports.deletetreatment = handlerFactory.deleteOne(Treatment);
exports.getAlltreatment = handlerFactory.getAllpop1(Treatment, 
  {path:"patient",select:"name  -_id"},
  {path:"details.service",select:"name  -_id"});


  exports.createtreatment = catchAsync(async (req, res, next) => {
    const thiservice = await Service.findById(req.body.details.service);
    if (!thiservice) return next(new AppError("service is not defind", 400));
   req.body.remaining_amount=thiservice.cost-req.body.details.paid
      const doc = await Treatment.create(req.body);
      res.status(200).json({
        status: "success",
        doc,
      });
    })

  exports.createcompletion = catchAsync(async (req, res, next) => {
    const thisTreatment = await Treatment.findById(req.body.treatment );
    if (!thisTreatment) return next(new AppError("Treatment is not defind", 400));
    const thiservice = await Service.findById(thisTreatment.details.service);
    req.body.patient=thisTreatment.patient
    req.body.details = {
              // تأكد من أنك تمرر هذه القيمة من الطلب
              service:thisTreatment.details.service,
              numSession: thisTreatment.details.numSession + 1,
              tooth: thisTreatment.details.tooth,
              notes: thisTreatment.details.notes,
              paid: thisTreatment.details.paid + req.body.details.paid,
              date:req.body.details.date
       }
   req.body.remaining_amount=thiservice.cost-req.body.details.paid
      const doc = await Treatment.create(req.body);
      res.status(200).json({
        status: "success",
        doc,
      });
    })
  

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
