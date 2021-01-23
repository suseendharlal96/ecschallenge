import express from "express";
const router = express.Router();

import { getCart, addToCart } from "../controllers/cart.js";
import auth from "../middleware/auth.js";

router.get("/", auth, getCart);
router.post("/addToCart", auth, addToCart);

export default router;
