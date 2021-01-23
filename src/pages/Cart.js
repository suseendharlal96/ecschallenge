import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";

import * as actions from "../store/actions/index";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title name", width: 390 },
  { field: "authors", headerName: "Authors ", width: 300 },
  {
    field: "averageRating",
    headerName: "Rating",
    type: "number",
    width: 110,
  },
  {
    field: "isbn",
    headerName: "ISBN",
    width: 130,
  },
  {
    field: "languageCode",
    headerName: "Language",
    width: 90,
  },
  {
    field: "ratingsCount",
    headerName: "Rating Counts",
    type: "number",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 90,
  },
];

const Cart = ({ cart, authData }) => {
  const history = useHistory();
  console.log(cart);
  let actualCart;
  if (cart && cart.length > 0) {
    actualCart = cart.map((book) => {
      return {
        id: book.id,
        title: book.title,
        authors: book.authors,
        averageRating: "⭐".repeat(book.average_rating),
        isbn: book.isbn,
        languageCode: book.language_code,
        ratingsCount: book.ratings_count,
        price: book.price,
      };
    });
  }
  const dispatch = useDispatch();

  useEffect(() => {
    if (authData) {
      dispatch(actions.getCart());
    } else {
      history.push("/auth");
    }
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {cart && cart.length > 0 ? (
        <DataGrid rows={actualCart} columns={columns} pageSize={5} />
      ) : (
        <p>Loading.. </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  authData: state?.authReducer?.authData?.result,
  cart: state?.cartReducer?.cart,
});

export default connect(mapStateToProps)(Cart);
