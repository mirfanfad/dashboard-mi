import React from "react";
import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import animatedIcon from "../../assets/img/website-optimization.json";
import Lottie from "lottie-react";

export default function ComingSoon() {
	return (
		<Card.Body>
			<Card className="text-center h-100">
				<Card.Body>
					<div className="d-flex justify-content-center">
						<Lottie
							animationData={animatedIcon}
							loop={true}
							style={{
								height: "400px",
								width: "400px",
								marginTop: "-50px",
							}}
						/>
					</div>
					<div className="display-1 text-500 fs-7">
						<hr />
						COMING SOON
						<hr />
					</div>
				</Card.Body>
			</Card>
		</Card.Body>
	);
}
