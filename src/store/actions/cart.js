import * as actionType from "./actionType";
import { axiosClient } from "../../axios";

export const tempCart = (data) => (dispatch) => {
  dispatch({ type: actionType.TEMPCART, data });
};

export const getCart = () => async (dispatch) => {
  try {
    const { data: cart } = await axiosClient.get("/cart", {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("token") ? localStorage.getItem("token") : null
        }`,
      },
    });
    console.log(cart);
    dispatch({ type: actionType.GET_CART_SUCCESS, cart });
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (formData) => async (dispatch) => {
  console.log(formData);
  dispatch({ type: actionType.ADD_TO_CART });
  try {
    const { data: cart } = await axiosClient.post("/cart/addToCart", formData, {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("token") ? localStorage.getItem("token") : null
        }`,
      },
    });
    dispatch({ type: actionType.ADD_TO_CART_SUCCESS, cart });
  } catch (error) {
    dispatch({
      type: actionType.ADD_TO_CART_FAIL,
      errors: error?.response?.data,
    });
  }
};
