import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import classNames from "classnames";
// import NavbarTopDropDownMenus from "./NavbarTopDropDownMenus";
import TopNavRightSideNavItem from "./TopNavRightSideNavItem";
import { useLocation } from "react-router";
import Logo from "../../common/Logo";
import { navbarBreakPoint, topNavbarBreakpoint } from "../../../config";
// import AppContext from "../../../context/Context";

const NavbarTop = () => {
	// const {
	// 	config: { showBurgerMenu, navbarPosition, navbarCollapsed },
	// 	setConfig,
	// } = useContext(AppContext);

	const { pathname } = useLocation();
	const [showDropShadow, setShowDropShadow] = useState(false);

	const setDropShadow = () => {
		const el = document.documentElement;
		if (el.scrollTop > 0) {
			setShowDropShadow(true);
		} else {
			setShowDropShadow(false);
		}
	};

	const handleBurgerMenu = () => {
		navbarPosition === "top" && setConfig("navbarCollapsed", !navbarCollapsed);
	};

	useEffect(() => {
		window.addEventListener("scroll", setDropShadow);
		return () => window.removeEventListener("scroll", setDropShadow);
	}, []);

	return (
		<Navbar
			className={classNames("navbar-glass  fs--1 navbar-top sticky-kit", {
				"navbar-glass-shadow": showDropShadow,
			})}
			expand={topNavbarBreakpoint}
		>
			<Navbar.Toggle
				className={classNames("toggle-icon-wrapper me-md-3 me-2", {
					"d-lg-none": true,
				})}
				as="div"
			>
				<button
					className="navbar-toggler-humburger-icon btn btn-link d-flex flex-center"
					onClick={handleBurgerMenu}
					id="burgerMenu"
				>
					<span className="navbar-toggle-icon">
						<span className="toggle-line" />
					</span>
				</button>
			</Navbar.Toggle>

			<Logo at="navbar-top" width={80} id="topLogo" />

			{/* <Navbar.Collapse in={navbarCollapsed} className="scrollbar pb-3 pb-lg-0">
				<Nav navbar><NavbarTopDropDownMenus /></Nav>
			</Navbar.Collapse> */}

			{/* <TopNavRightSideNavItem /> */}
		</Navbar>
	);
};

export default NavbarTop;
