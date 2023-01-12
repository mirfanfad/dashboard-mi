import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/theme.css";
import "./assets/css/theme.min.css";
import "./assets/css/user.css";
import "./assets/css/user.min.css";
import "./assets/css/user-rtl.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>
);
