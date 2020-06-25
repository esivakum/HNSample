import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Chart extends Component {
	render() {

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Top Hacker News Score Chart"
			},
			axisY: {
				title: "Score",
				includeZero: false,
				suffix: ""
			},
			axisX: {
				title: "ID",
				prefix: "HN-",
				interval: 1,
				includeZero: false,

			},
			data: [{
				type: "line",
				toolTipContent: "ID-{x}: Score-{y}%",
				dataPoints: this.props.location.state.arrData,
			}]
		}
		
		return (
		<div>
			<h1>Hacker News score Chart</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Chart;                           