import dotenv from "dotenv";
dotenv.config();
import CartModal from "../models/Cart.js";

export const getCart = async (req, res) => {
  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }
  try {
    const cart = await CartModal.find({ user: req.userId });
    console.log(cart);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const addToCart = async (req, res) => {
  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }
  const data = req.body;
  try {
    const cart = await CartModal.insertMany(data);
    console.log(cart);
    res.status(201).send(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};
