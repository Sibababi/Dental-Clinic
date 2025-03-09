const patientController = require("../controllers/patientController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(authMiddlewers.restrictTo("admin","nurse"),patientController.getAllpatient).post(authMiddlewers.restrictTo("admin","nurse"),patientController.createpatient);
  router
    .route("/:id")
    .get(authMiddlewers.restrictTo("admin","nurse"),patientController.getpatient)
    .patch(authMiddlewers.restrictTo("admin","nurse"),patientController.updatepatient)
    .delete(authMiddlewers.restrictTo("admin"),patientController.deletepatient);
  module.exports = router;
  