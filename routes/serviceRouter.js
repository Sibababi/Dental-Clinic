const serviceController = require("../controllers/serviceController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(authMiddlewers.restrictTo("admin","nurse"),serviceController.getAllservice).post(authMiddlewers.restrictTo("admin","nurse"),serviceController.createservice);
  router
    .route("/:id")
    .get(authMiddlewers.restrictTo("admin","nurse"),serviceController.getservice)
    .patch(authMiddlewers.restrictTo("admin","nurse"),serviceController.updateservice)
    .delete(authMiddlewers.restrictTo("admin","nurse"),serviceController.deleteservice);
  module.exports = router;
  