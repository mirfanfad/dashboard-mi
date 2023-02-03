import React from "react";
import { Col, Row } from "react-bootstrap";
import Flex from "../../common/Flex";

export default function Notes({ icon, title, description, linkUrl }) {
	return (
		<div className="border border-1 border-300 rounded-2 p-3 ask-analytics-item position-relative mb-3 bg-200">
			<h5 className="fs-0 text-800 me-3 text-warning">{`- ${description} -`}</h5>
			<a className="fs--1 text-danger ps-3" href={linkUrl} target="_blank">
				{linkUrl}
			</a>
			<Flex alignItems="center">
				<h5 className=" fs--1 mb-0 ps-3 text-info">{title}</h5>
			</Flex>
		</div>
	);
}
