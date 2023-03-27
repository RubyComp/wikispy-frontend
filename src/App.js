import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
// import Intro from './pages/Intro'
import NoPage from './pages/NoPage'
import Search from './pages/Search'
import Edits from './pages/stats/Edits'

const App = () => {
	return (
		<div id="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Navigate to="/search" />} />
						<Route path="search/*" element={<Search />} />
						<Route path="stats" element={<Navigate to="/stats/edits" />} />
						<Route path="stats/edits" element={<Edits />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
