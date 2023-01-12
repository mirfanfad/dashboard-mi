import React from "react";
import { useNavigate } from "react-router-dom";
// import MandiriLogo from "../../assets/img/mandiriinhealth.png";

export default function NotFound() {
	const navigate = useNavigate();

	const handleHome = () => {
		navigate("/");
	};

	return (
		<div className="mx-4">
			<div className="row flex-center min-vh-100 text-center">
				<div className="col-sm-10 col-md-8 col-lg-6 col-xxl-5">
					<a
						className="d-flex flex-column align-items-center mb-4  text-decoration-none cursor-pointer"
						onClick={() => handleHome()}
					>
						{/* <img className="ms-4" src={MandiriLogo} alt="" width="140" /> */}
						<span className="font-sans-serif fw-bolder fs-4 d-inline-block text-warning ">
							NEW AKTUW
						</span>
					</a>
					<div className="card">
						<div className="card-body p-4 p-sm-5">
							<div className="fw-black lh-1 text-300 fs-error">404</div>
							<p className="lead mt-4 text-800 font-sans-serif fw-semi-bold w-md-75 w-xl-100 mx-auto">
								The page you're looking for is not found.
							</p>
							<hr />
							<p>
								Make sure the address is correct and that the page hasn't moved.
								If you think this is a mistake, contact us.
							</p>
							<a
								className="btn btn-sm mt-3 btn-warning"
								onClick={() => handleHome()}
							>
								<span className="fas fa-home me-2"></span>Take me home
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
