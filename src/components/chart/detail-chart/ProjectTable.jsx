import React from "react";
import PropTypes from "prop-types";
import Flex from "../../../components/common/Flex";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import detailData from "../../../data/detailData";
import moment from "moment/moment";

const ProjectTable = ({ dueDate }) => {
	return (
		<>
			<Flex
				justifyContent="center"
				className="mb-3"
				alignItems="center"
				direction={"column"}
			>
				<h4 className="mb-0">Due Date</h4>
				<p className="fs--1 text-600 mb-0">
					{moment(Date.parse(dueDate)).format("dddd, DD MMMM YYYY")}
				</p>
			</Flex>
			{detailData.map((detail, index) => {
				return (
					<Flex
						key={detail.id}
						alignItems="center"
						justifyContent="between"
						className={classNames("rounded-3 bg-200 p-3 ", {
							"mb-2": index !== detailData.length - 1,
						})}
					>
						<>
							<h6 className="mb-0 fs--1">
								<FontAwesomeIcon
									icon="circle"
									className={`fs--1 me-3 ${detail.iconColor}`}
								/>
								{detail.name}
							</h6>
						</>
					</Flex>
				);
			})}
		</>
	);
};

ProjectTable.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			project: PropTypes.string.isRequired,
			iconColor: PropTypes.string.isRequired,
		})
	),
};

export default ProjectTable;
