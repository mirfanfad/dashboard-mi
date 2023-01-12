import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import NavbarVertical from "components/navbar/vertical/NavbarVertical";
// import AppContext from "context/Context";
// import Footer from "components/footer/Footer";
// import ProductProvider from "components/app/e-commerce/ProductProvider";
import classNames from "classnames";
import NavbarTop from "../components/navbar/top/NavbarTop";

const MainLayout = () => {
	const { hash, pathname } = useLocation();
	// const isChat = pathname.includes('chat');

	useEffect(() => {
		setTimeout(() => {
			if (hash) {
				const id = hash.replace("#", "");
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView({ block: "start", behavior: "smooth" });
				}
			}
		}, 0);
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className={"container-fluid"}>
			<div className={classNames("content", "pb-0")}>
				<NavbarTop />
				{/*------ Main Routes ------*/}
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
