import React from "react";
import Flex from "../../common/Flex";

export default function Issue({ icon, title, description }) {
	return (
		<div className="border border-1 border-300 rounded-2 p-3 ask-analytics-item position-relative mb-3 bg-200">
			<h5 className="fs-0 text-800 mb-3 text-warning">{`- ${description} -`}</h5>
			<Flex alignItems="center">
				{/* <FontAwesomeIcon icon={icon} className="text-primary" /> */}
				<h5 className=" fs--1 mb-0 ps-3 text-danger">{title}</h5>
			</Flex>
		</div>
	);
}
