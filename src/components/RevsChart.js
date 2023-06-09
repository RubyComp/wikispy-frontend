import React from 'react'
import {Bar, Line} from 'react-chartjs-2'
import {Chart, registerables} from 'chart.js'
import Loader from './Loader/Loader'

Chart.register(...registerables)

const addLeadingZero = (number) => {
	if (number < 10)
		return '0' + number
	else
		return number
}

const options = {
	elements: {
		point:{
			radius: 0
		}
	},
	scales: {
		edits: {
			beginAtZero: true,
			position: 'left',
			// title: {
			// 	display: true,
			// 	text: 'EDITS',
			// }
		},
		users: {
			beginAtZero: true,
			position: 'right',
			max: 600,
			// title: {
			// 	display: true,
			// 	text: 'USERS',
			// },
			grid: {
				display: false,
				drawOnChartArea: false,
				drawTicks: false,
			}
		},
		x: {
			ticks: {
				callback: function (label) {
					const realLabel = this.getLabelForValue(label)

					const date = realLabel.split(';')

					const month = date[0]
					const year = date[1]

					const mounthZero = addLeadingZero(month)

					return `${mounthZero}.${year}`
				},
				maxRotation: 90,
				minRotation: 90
			},
		},
		xAxis2: {
			type: 'category',
			ticks: {
				callback: function (label) {

					const date = this
						.getLabelForValue(label)
						.split(';')

					const month = date[0]
					const year = date[1]

					if (month == 7)
						return year
				},
			},
			textAlign: 'left',
			maxRotation: 0,
			minRotation: 0
		}
	},
	animation: {
		duration: 1600,
	},
}

const RevsChart = ({data, chartStyle, loading}) => {

	// if (data && Object.keys(data).length) {
	if (data[0]) {

		if (chartStyle == 'bars') {
			return <Bar
				data={data[0]}
				options={options}
				className={`pb-5 ${loading ? 'loading' : ''}`}
			/>
		} else {
			return <Line
				data={data[0]}
				options={options}
				className={`pb-5 ${loading ? 'loading' : ''}`}
			/>
		}
	}
	else
		return <Loader />

}

export default RevsChart