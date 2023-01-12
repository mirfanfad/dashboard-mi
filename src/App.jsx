import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import DynamicRoutes from "./components/DynamicRoutes/DynamicRoutes";

function App() {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<DynamicRoutes />
		</BrowserRouter>
	);
}

export default App;
