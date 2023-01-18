import React from "react";
import Flex from "../../common/Flex";

export default function Issue({ icon, title, description }) {
	return (
		<div className="border border-1 border-300 rounded-2 p-3 ask-analytics-item position-relative mb-3 bg-200">
			<Flex alignItems="center" className="mb-3">
				{/* <FontAwesomeIcon icon={icon} className="text-primary" /> */}
				<h5 className="fs-0 mb-0 ps-3 text-primary">{title}</h5>
			</Flex>
			<h5 className="fs--1 text-800">{description}</h5>
		</div>
	);
}
