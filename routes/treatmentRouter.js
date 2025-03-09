const treatmentController = require("../controllers/treatmentController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(authMiddlewers.restrictTo("admin","nurse"),treatmentController.getAlltreatment).post(authMiddlewers.restrictTo("admin"),treatmentController.createtreatment);
  router.route("/completion").post(authMiddlewers.restrictTo("admin"),treatmentController.createcompletion);
  router
    .route("/:id")
    .get(authMiddlewers.restrictTo("admin","nurse"),treatmentController.gettreatment)
    .patch(authMiddlewers.restrictTo("admin"),treatmentController.updatetreatment)
    .delete(treatmentController.deletetreatment);
  module.exports = router;
  