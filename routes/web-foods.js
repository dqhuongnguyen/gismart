const express = require("express");
const router  = express.Router();
const ctrl    = require("../controllers/webFoodController");
const { requireLogin, requireAdmin } = require("../middleware/webAuth");

router.get("/", ctrl.index);

// Static paths must be registered before /:id so e.g. /foods/new is not captured as id "new".
router.get("/new", requireLogin, requireAdmin, ctrl.newForm);
router.post("/", requireLogin, requireAdmin, ctrl.create);

router.get("/:id/edit", requireLogin, requireAdmin, ctrl.editForm);
router.put("/:id", requireLogin, requireAdmin, ctrl.update);
router.delete("/:id", requireLogin, requireAdmin, ctrl.destroy);

router.get("/:id", ctrl.show);

module.exports = router;
