import React from 'react'
import { Route } from 'react-router-dom'
import Edits from './Edits'
import Stats from './Stats'
import StatsLayout from './StatsLayout'

const StatsIndex = () => {

	return (
		<Route path="/" element={<StatsLayout />}>
			<Route index element={<Stats />} />
			<Route path="edits" element={<Edits />} />
		</Route>
	)
}

export default StatsIndex