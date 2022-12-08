const router = require("express").Router();
const controller = require("./orders.controller");

router
    .route("/")
    .get(controller.list)
    .post(controller.create);

router 
    .route("/:orderId")
    .get(controller.read)
    .delete(controller.destroy)
    .put(controller.update)


module.exports = router;
