import React, { useState } from "react";
import PropTypes from "prop-types";
import Flex from "../../common/Flex";
import {
	Card,
	Col,
	Row,
	ProgressBar,
	Modal,
	CloseButton,
} from "react-bootstrap";
import MostLeadsChart from "./MostLeadsChart";
import classNames from "classnames";
import Background from "../../common/Background";
import bg1 from "../../../assets/img/icons/spot-illustrations/corner-1.png";
import bg2 from "../../../assets/img/icons/spot-illustrations/corner-2.png";
import bg3 from "../../../assets/img/icons/spot-illustrations/corner-3.png";
import ListProjects from "./ListProjects";
import micareData from "../../../data/micareData";
import ProjectTable from "../detail-chart/ProjectTable";

const MostLeads = () => {
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState("");
	const [dueDate, setDueDate] = useState("");

	const handleShowModal = (title, dueDate) => {
		setTitle(title);
		setDueDate(dueDate);
		setShow(true);
	};
	return (
		<>
			<Card className="h-100 mt-3">
				<Background image={bg2} className="bg-card" />
				<Card.Body as={Row}>
					<Col md={12} xxl={12} className="mb-xxl-1">
						<MostLeadsChart micareData={micareData} />
					</Col>
				</Card.Body>
			</Card>
			<Card className="h-100 mt-3">
				{/* <Background image={bg3} className="bg-card" /> */}
				<Card.Body as={Row}>
					<Col xxl={12} md={6}>
						{micareData.map(
							(item, index) =>
								index < micareData.length / 2 && (
									<ListProjects
										item={item}
										key={item.id}
										index={index}
										handleShowModal={() =>
											handleShowModal(item.name, item.duedate)
										}
									/>
								)
						)}
					</Col>
					<Col xxl={12} md={6}>
						{micareData.map(
							(item, index) =>
								index >= micareData.length / 2 && (
									<ListProjects
										item={item}
										key={item.id}
										index={index}
										handleShowModal={() =>
											handleShowModal(item.name, item.duedate)
										}
									/>
								)
						)}
					</Col>
				</Card.Body>
			</Card>

			{/* Modal Detail */}

			<Modal show={show} fullscreen={"md-down"} onHide={() => setShow(false)}>
				<Modal.Header>
					<Modal.Title>{title}</Modal.Title>
					<CloseButton
						className="btn btn-circle btn-sm transition-base p-0"
						onClick={() => setShow(false)}
					/>
				</Modal.Header>
				<Modal.Body className="bg-light">
					<ProjectTable dueDate={dueDate} />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default MostLeads;
