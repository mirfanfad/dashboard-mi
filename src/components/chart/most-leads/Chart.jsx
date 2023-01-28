import ReactEChartsCore from "echarts-for-react/lib/core";
import { GaugeChart } from "echarts/charts";
import {
	GridComponent,
	LegendComponent,
	TitleComponent,
	TooltipComponent,
} from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { getColor } from "../../../helpers/utils";
import PropTypes from "prop-types";
import React, { useRef } from "react";

// MostLeadsChart

// echarts.use([
// 	PieChart,
// 	TitleComponent,
// 	TooltipComponent,
// 	GridComponent,
// 	LineChart,
// 	CanvasRenderer,
// 	LegendComponent,
// ]);

// const getOptions = (data) => ({
// 	color: [getColor("warning"), getColor("primary")],
// 	tooltip: {
// 		trigger: "item",
// 		padding: [7, 10],
// 		backgroundColor: getColor("gray-100"),
// 		borderColor: getColor("gray-300"),
// 		textStyle: { color: getColor("dark") },
// 		borderWidth: 1,
// 		transitionDuration: 0,
// 		formatter: function (params) {
// 			return `<strong>${params.data.name}</strong> ${params.percent}%`;
// 		},
// 	},
// 	legend: { show: false },
// 	series: [
// 		{
// 			name: "Total",
// 			type: "pie",
// 			radius: ["100%", "67%"],
// 			avoidLabelOverlap: false,
// 			itemStyle: {
// 				borderWidth: 2,
// 				borderColor: getColor("gray-300"),
// 			},
// 			label: {
// 				show: false,
// 			},
// 			emphasis: {
// 				scale: false,
// 			},
// 			labelLine: { show: false },
// 			data: data,
// 		},
// 	],
// });

echarts.use([
	TitleComponent,
	TooltipComponent,
	GridComponent,
	GaugeChart,
	CanvasRenderer,
	LegendComponent,
]);

const getOptions = (data) => ({
	series: [
		{
			type: "gauge",
			startAngle: 90,
			endAngle: -270,
			radius: "90%",
			pointer: {
				show: false,
			},
			progress: {
				show: true,
				overlap: false,
				roundCap: true,
				clip: false,
				itemStyle: {
					color: getColor("primary"),
				},
			},
			axisLine: {
				lineStyle: {
					width: 10,
					color: [[1, getColor("gray-200")]],
				},
			},
			splitLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				show: false,
			},
			data: [
				{
					value: data,
					detail: {
						offsetCenter: ["7%", "4%"],
					},
				},
			],
			detail: {
				width: 50,
				height: 14,
				fontSize: 28,
				fontWeight: 500,
				fontFamily: "poppins",
				color: getColor("warning"),
				formatter: "{value}%",
			},
		},
	],
});

const Chart = ({ micareData }) => {
	let sumData = 0;
	micareData.map((item) => (sumData = item.value + sumData));

	// const data = [
	// 	{
	// 		name: "completed",
	// 		value: sumData,
	// 	},
	// 	{
	// 		name: "uncompleted",
	// 		value: 1000 - sumData,
	// 	},
	// ];
	// const chartRef = useRef(null);

	return (
		<div className="position-relative py-2">
			<ReactEChartsCore
				echarts={echarts}
				option={getOptions(
					((sumData / (micareData.length * 100)) * 100).toFixed(2)
				)}
				style={{ height: "11.3rem", widht: "11.3rem" }}
			/>
			<div className="text-center">
				<h5 className="fs-0 mb-1 text-primary">New MiCare</h5>
				<p className="fs--1 mb-0">Progression</p>
			</div>
			{/* MostLeadsChart */}
			{/* <ReactEChartsCore
				ref={chartRef}
				echarts={echarts}
				option={getOptions(data)}
				style={{ height: "18rem" }}
			/>
			<div className="position-absolute top-50 start-50 translate-middle text-center">
				<p className="fs--1 mb-0 text-400 font-sans-serif fw-medium">Project</p>
				<p className="fs-1 mb-0 font-sans-serif fw-medium mt-n2">New MiCare</p>
			</div> */}
		</div>
	);
};

Chart.propTypes = {
	data: PropTypes.arrayOf(PropTypes.array),
};

export default Chart;
