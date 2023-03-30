import React, { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap'
import ModeButtons from '../../components/ModeButtons'
import RevsChart from '../../components/RevsChart'
import RevsTable from '../../components/RevsTable'
import config from '../../config'
import useFetch from '../../hooks/useFetch'
import Title from '../../parts/Title'

const Edits = () => {

	const [chartMode, setChartMode] = useState('nobots')
	const [chartStyle, setChartStyle] = useState('line')
	const [loading, setLoading] = useState(false)

	const url = config.api.getRevs
	const api = `${url}&mode=${chartMode}`

	const [data] = useFetch(api)[0]

	useEffect(() => {
		setLoading(false)
	}, [data])

	const handleModeChange = (value) => {
		setLoading(true)
		setChartMode(value)
	}

	const handleStyleChange = (value) => {
		setChartStyle(value)
	}

	return (
		<div>
			<Title>Edits</Title>

			<Stack direction="horizontal" gap={4}>
				<ModeButtons
					list={config.charts.types.revs}
					state={chartMode}
					disabled={loading}
					keyname="mode"
					onChange={(e) =>
						handleModeChange(e.currentTarget.value)
					}
				/>
				<ModeButtons
					list={config.charts.styles.lines}
					state={chartStyle}
					disabled={loading}
					keyname="style"
					onChange={(e) =>
						handleStyleChange(e.currentTarget.value)
					}
				/>
			</Stack>
			<RevsChart
				data={data}
				chartStyle={chartStyle}
				loading={loading}
			/>
			<RevsTable
				data={data}
				loading={loading}
			/>
		</div>
	)
}

export default Edits

