import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

import axios from "axios";

import { booksData } from "../db/booksdata";

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

const Home = () => {
  const actualbooks = booksData.map((book) => {
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

  // useEffect(() => {
    
    // Got CORS for accessing using axios

  //   axios
  //     .get(
  //       "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json"
  //     )
  //     .then((res) => {
  //       // console.log(res);
  //       // setBooks(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={actualbooks}
        columns={columns}
        pageSize={50}
        checkboxSelection
      />
    </div>
  );
};

export default Home;
