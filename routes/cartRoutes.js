const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { addToCart, getCart, deleteCartItem } = require("../controllers/cartController");

router.post("/", auth, addToCart);
router.get("/", auth, getCart);
router.delete("/:id", auth, deleteCartItem);

module.exports = router;
