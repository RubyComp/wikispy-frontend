import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edits from './Edits'
import Stats from './Stats'

const StatsLayout = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<StatsLayout />}>
					<Route index element={<Stats />} />
					<Route path="edits" element={<Edits />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default StatsLayout