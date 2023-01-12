import React from "react";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import classNames from "classnames";

const ListProjects = ({ item, handleShowModal }) => {
	const { id, name, value, variant } = item;
	return (
		<>
			<Row
				className={classNames("g-0 align-items-center pb-3", {
					// "border-top pt-3": index !== 0,
				})}
				onClick={() => handleShowModal()}
				style={{ cursor: "pointer" }}
			>
				<Col className="pe-4">
					<h6 className="fs--1 text-600">{name}</h6>
					<ProgressBar className="mt-xxl-auto" style={{ height: 8 }}>
						<ProgressBar
							striped
							variant={variant}
							now={value}
							key={id}
							className="rounded-3"
						/>
					</ProgressBar>
				</Col>
				<Col xs="auto" className="text-end">
					<p className="mb-0 text-900 font-sans-serif">{value}%</p>
				</Col>
			</Row>
		</>
	);
};

export default ListProjects;
