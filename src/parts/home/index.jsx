import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import barChart from "../../assets/img/illustrations/crm-bar-chart.png";
import lineChart from "../../assets/img/illustrations/crm-line-chart.png";
import bg1 from "../../assets/img/icons/spot-illustrations/corner-1.png";
import bg2 from "../../assets/img/icons/spot-illustrations/corner-2.png";
import bg3 from "../../assets/img/icons/spot-illustrations/corner-3.png";
import bgWelcome from "../../assets/img/icons/spot-illustrations/authentication-corner.png";
import Background from "../../components/common/Background";
import Flex from "../../components/common/Flex";
import MostLeads from "../../components/chart/most-leads/MostLeads";
import classNames from "classnames";
import moment from "moment/moment";

export default function Home() {
	return (
		<>
			<Card className="bg-100 shadow-none border mt-3">
				<Background image={bgWelcome} className="bg-card" />
				<Card.Body className="py-0">
					<Flex justifyContent={"end"}>
						{/* <span className={classNames("font-sans-serif", "h5")}>
							Project New MiCare
						</span> */}
						<span className={classNames("font-sans-serif", "h5")}>
							{moment(new Date()).format("dddd, DD MMMM YYYY")}
						</span>
					</Flex>
				</Card.Body>
			</Card>
			<MostLeads />
		</>
	);
}
