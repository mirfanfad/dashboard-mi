import React from "react";
import PropTypes from "prop-types";
import Flex from "../../common/Flex";
import classNames from "classnames";
import moment from "moment/moment";

const DetailProjectTable = ({ dueDate, title, details }) => {
	return (
		<>
			<Flex
				justifyContent="center"
				className="mb-3"
				alignItems="center"
				direction={"column"}
			>
				<h4 className="mb-0 text-primary">{title}</h4>
				<p className="fs--1 text-600 mb-0">
					{moment(Date.parse(dueDate)).format("dddd, DD MMMM YYYY")}
				</p>
			</Flex>
			{details.map((detail, index) => {
				return (
					<Flex
						key={detail.id}
						alignItems="center"
						justifyContent="between"
						className={classNames("rounded-3 bg-200 p-3 ", {
							"mb-2": index !== details.length - 1,
						})}
					>
						<>
							<h6 className="mb-0 fs--1 text-primary">
								{/* <i
									icon="circle"
									className={` fa fa-circle fs--1 me-3 ${detail.iconColor}`}
								/> */}
								{detail.name}
							</h6>
							<h6 className="mb-0 fs--1 text-primary">{detail.percentage}%</h6>
						</>
					</Flex>
				);
			})}
		</>
	);
};

DetailProjectTable.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			project: PropTypes.string.isRequired,
			iconColor: PropTypes.string.isRequired,
		})
	),
};

export default DetailProjectTable;
