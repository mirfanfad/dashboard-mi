import React from "react";
import {
	Card,
	Col,
	OverlayTrigger,
	ProgressBar,
	Row,
	Tooltip,
} from "react-bootstrap";
import classNames from "classnames";
import moment from "moment/moment";

const ListProjects = ({ item, handleShowModal }) => {
	const { id, name, value, duedate } = item;
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
					<OverlayTrigger
						key={"top"}
						placement="top"
						overlay={
							<Tooltip id={`tooltip-${"top"}`}>
								{new Date(duedate) < new Date() ? "Overdue" : "On Schedule"}
							</Tooltip>
						}
					>
						<h6
							className={classNames(
								"fs--1",
								{
									"text-danger": new Date(duedate) < new Date(),
								},
								{
									"text-primary": new Date(duedate) > new Date(),
								}
							)}
						>
							{moment(duedate).format("DD MMM YYYY")}
						</h6>
					</OverlayTrigger>
					<ProgressBar className="mt-xxl-auto" style={{ height: 8 }}>
						<ProgressBar
							striped
							variant={
								value === 100 ? "success" : value > 0 ? "warning" : "info"
							}
							now={value}
							key={id}
							className="rounded-3"
						/>
					</ProgressBar>
				</Col>
				<Col xs="auto" className="text-end">
					<p className="mb-0 text-900 font-sans-serif">{value}%</p>
					<p className="fs--2 mb-0 font-sans-serif">
						{value === 100 ? "Done" : value > 0 ? "On Progress" : "Waiting"}
					</p>
				</Col>
			</Row>
		</>
	);
};

export default ListProjects;
