import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
// import { useRecoilState } from "recoil";
// import Login from "../../pages/auth/login";
// import ComingSoon from "../../parts/errors/ComingSoon";
import NotFound from "../../parts/errors/NotFound";
import Home from "../../parts/home";
// import Home from "../../parts/home";
// import routes from "../../routes/routes.jsx";
// import { authState } from "../../store/store";
// import Layout from "../Layout";

export default function DynamicRoutes() {
	// const [auth, _] = useRecoilState(authState);

	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			{/* <Route path="/auth/login" element={<Login />} /> */}
			{/* Route with Layout */}
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				{/* {routes.map((route) => {
					if (route.roles.includes(auth?.roles[0])) {
						{
							return route?.children.map((route, index) => {
								if (route.roles) {
									if (!route.roles.some((x) => auth?.roles?.indexOf(x) >= 0)) {
										return null;
									}
								}
								if (route.children) {
									return route?.children.map((route, index) => {
										return (
											<Route
												key={index}
												path={route.path}
												element={(route.elementName ??= <ComingSoon />)}
											/>
										);
									});
								}
								return (
									<Route
										key={index}
										path={route.path}
										element={(route.elementName ??= <ComingSoon />)}
									/>
								);
							});
						}
					}
				})} */}
			</Route>
		</Routes>
	);
}
