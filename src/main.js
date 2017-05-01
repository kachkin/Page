import React from "react";
import ReactDOM from "react-dom"
import App from "./App"

import products from "../src/products.json"

ReactDOM.render(
	<App
		products={products}
	/>,
	document.getElementById("root")
);
