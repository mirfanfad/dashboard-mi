import React, { useEffect, useState } from "react";
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
import Chart from "./Chart";
import classNames from "classnames";
import Background from "../../common/Background";
import bg1 from "../../../assets/img/icons/spot-illustrations/corner-1.png";
import bg2 from "../../../assets/img/icons/spot-illustrations/corner-2.png";
import bg3 from "../../../assets/img/icons/spot-illustrations/corner-3.png";
import ListProjects from "./ListProjects";
import DetailProjectTable from "../detail-chart/DetailProjectTable";
import moment from "moment/moment";
import signalImg from "../../../assets/img/icons/signal.png";
import docsImg from "../../../assets/img/icons/docs.png";
import Issue from "./Issue";
import Notes from "./Notes";
import axios from "axios";
import db from "../../../../db.json";

const MostLeads = () => {
	const [apps, setApps] = useState(db.apps);
	const [issues, setIssues] = useState(db.issues);
	const [notes, setNotes] = useState(db.notes);

	const [show, setShow] = useState(false);
	const [title, setTitle] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [onSchedule, setOnSchedule] = useState(0);
	const [overtime, setOvertime] = useState(0);
	const [totalApps, setTotalApps] = useState(0);
	const [done, setDone] = useState(0);
	const [onProgress, setOnProgress] = useState(0);
	const [waiting, setWaiting] = useState(0);
	const [endDate, setEndDate] = useState("");
	const [details, setDetails] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		await axios
	// 			.get(`${import.meta.env.VITE_API_BASE_URL_API}/apps`)
	// 			.then((response) => {
	// 				setApps(response.data);
	// 				console.log(response.data);
	// 			});
	// 		await axios
	// 			.get(`${import.meta.env.VITE_API_BASE_URL_API}/issues`)
	// 			.then((response) => {
	// 				setIssues(response.data);
	// 			});
	// 		await axios
	// 			.get(`${import.meta.env.VITE_API_BASE_URL_API}/notes`)
	// 			.then((response) => {
	// 				setNotes(response.data);
	// 			});
	// 	};
	// 	fetchData();
	// }, []);

	const handleShowModal = (title, dueDate, detail) => {
		setTitle(title);
		setDueDate(dueDate);
		setDetails(detail);
		setShow(true);
	};

	useEffect(() => {
		setTotalApps(apps.length);
		setOnSchedule(
			apps.filter((data) => new Date(data.duedate) > new Date()).length
		);
		setOvertime(
			apps.filter((data) => new Date(data.duedate) < new Date()).length
		);
		setDone(apps.filter((data) => data.value === 100).length);
		setOnProgress(
			apps.filter((data) => data.value > 0 && data.value < 100).length
		);
		setWaiting(apps.filter((data) => data.value === 0).length);
		setEndDate(
			apps.reduce((max, obj) => {
				const date = new Date(obj.duedate);
				return max === null || date > max ? date : max;
			}, null)
		);
	}, [apps]);

	return (
		<>
			<Row className="g-3 mb-3">
				<Col md={4} xxl={12}>
					<Card className="h-100 mt-3">
						{/* <Background image={bg1} className="bg-card" /> */}
						<Card.Body>
							<Row className="mt-5">
								<Col
									md={6}
									xxl={6}
									className="mb-xxl-1 d-flex flex-column align-items-center"
								>
									<h6>Start Date</h6>
									<h5 className="text-info">
										{moment("2022-10-01").format("DD MMM YYYY")}
									</h5>
								</Col>
								<Col
									md={6}
									xxl={6}
									className="mb-xxl-1 d-flex flex-column align-items-center"
								>
									<h6>End Date</h6>
									<h5 className="text-info">
										{moment(endDate).format("DD MMM YYYY")}
									</h5>
								</Col>
							</Row>
							<hr />
							<Row>
								<Col
									md={6}
									xxl={6}
									className="mb-xxl-1 d-flex flex-column align-items-center"
								>
									<h6>On Schedule</h6>
									<h5 className="text-primary">{onSchedule}</h5>
									<h6 className="fw-light">Apps</h6>
								</Col>
								<Col
									md={6}
									xxl={6}
									className="mb-xxl-1 d-flex flex-column align-items-center"
								>
									<h6>Overdue</h6>
									<h5 className=" text-danger">{overtime}</h5>
									<h6 className="fw-light">Apps</h6>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} xxl={12}>
					<Card className="h-100 mt-3">
						<Background image={bg2} className="bg-card" />
						<Card.Body as={Row}>
							<Col md={12} xxl={12} className="mb-xxl-1">
								<Chart micareData={apps} />
							</Col>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} xxl={12}>
					<Card className="h-100 mt-3">
						{/* <Background image={bg3} className="bg-card" /> */}
						<Card.Body>
							<Row className="mt-4">
								<Col
									md={12}
									xxl={12}
									className="mb-xxl-1 d-flex flex-column align-items-center"
								>
									<h5>Total Apps</h5>
									<h4 className="text-primary">{totalApps}</h4>
								</Col>
							</Row>
							<hr />
							<Row>
								<Col
									md={3}
									xxl={3}
									className="mb-xxl-1 d-flex flex-column align-items-center"
								>
									<h6>Done</h6>
									<h5 className="text-success">{done}</h5>
									<h6 className="fw-light">Apps</h6>
								</Col>
								<Col
									md={6}
									xxl={6}
									className="mb-xxl-1 d-flex flex-column align-items-center"
								>
									<h6>On Progress</h6>
									<h5 className="text-warning">{onProgress}</h5>
									<h6 className="fw-light">Apps</h6>
								</Col>
								<Col
									md={3}
									xxl={3}
									className="mb-xxl-1 d-flex flex-column align-items-center"
								>
									<h6>Waiting</h6>
									<h5 className=" text-info">{waiting}</h5>
									<h6 className="fw-light">Apps</h6>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="g-3 mb-3">
				<Col md={12} xxl={12}>
					<Card className="h-100 mt-3">
						{/* <Background image={bg3} className="bg-card" /> */}
						<Card.Body as={Row}>
							<Col xxl={12} md={6}>
								{apps.map(
									(item, index) =>
										index < apps.length / 2 && (
											<ListProjects
												item={item}
												key={item.id}
												index={index}
												handleShowModal={() =>
													handleShowModal(item.name, item.duedate, item.details)
												}
											/>
										)
								)}
							</Col>
							<Col xxl={12} md={6}>
								{apps.map(
									(item, index) =>
										index >= apps.length / 2 && (
											<ListProjects
												item={item}
												key={item.id}
												index={index}
												handleShowModal={() =>
													handleShowModal(item.name, item.duedate, item.details)
												}
											/>
										)
								)}
							</Col>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="g-3">
				<Col md={12} xxl={12}>
					<Card className="mt-3">
						{/* <Background image={bg3} className="bg-card" /> */}
						<Card.Header as={Flex} alignItems="center">
							<img
								src={signalImg}
								alt="intelligence"
								height={35}
								className="me-2"
							/>
							<h5 className="fw-normal text-800 mb-0">Issue Project</h5>
						</Card.Header>
						<Card.Body className="p-0 overflow-auto">
							<div className="pt-0 px-card" style={{ maxHeight: 450 }}>
								{issues.map((item, index) => (
									<Issue
										key={index}
										icon={item.icon}
										title={item.title}
										description={item.description}
									/>
								))}
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="g-3">
				<Col md={12} xxl={12}>
					<Card className="mt-3">
						{/* <Background image={bg3} className="bg-card" /> */}
						<Card.Header as={Flex} alignItems="center">
							<img
								src={docsImg}
								alt="intelligence"
								height={30}
								className="me-2"
							/>
							<h5 className="fw-normal text-800 mb-0">Notes Project</h5>
						</Card.Header>
						<Card.Body className="p-0 overflow-auto">
							<div className="pt-0 px-card" style={{ maxHeight: 450 }}>
								{notes.map((item, index) => (
									<Notes
										key={index}
										icon={item.icon}
										title={item.title}
										description={item.description}
										linkUrl={item.linkUrl}
									/>
								))}
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			{/* Modal Detail */}

			<Modal show={show} fullscreen={"md-down"} onHide={() => setShow(false)}>
				{/* <Background image={bg3} className="bg-card" /> */}
				{/* <Modal.Header>
					<Modal.Title>Detail</Modal.Title>
				</Modal.Header> */}
				<Modal.Body className="bg-light">
					<CloseButton
						className="btn btn-circle btn-sm transition-base p-0 float-end z-index-99"
						onClick={() => setShow(false)}
					/>
					<DetailProjectTable
						dueDate={dueDate}
						title={title}
						details={details}
					/>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default MostLeads;
