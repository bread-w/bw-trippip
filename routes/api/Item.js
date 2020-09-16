const router = ("express").Router();
const itemController = ("../../controllers/itemController")


router.route("/")
.get(itemController.findAll)
.post(itemController.create);

router
.route("/:id")
.get(itemController.findById)
.put(itemController.update)
.delete(itemController.remove)

module.exports = router;