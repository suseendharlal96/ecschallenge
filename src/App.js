import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";

export default function DataGridDemo() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <div style={{ marginTop: "5%" }}>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/cart" exact component={Cart} />
        </div>
      </BrowserRouter>
    </div>
  );
}
