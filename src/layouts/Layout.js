import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from '../parts/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = () => {
	return (
		<Container id="Layout" className="pb-5">
			<Row>
				<Header />
			</Row>
			<Row>
				<Col>
					<Outlet />
				</Col>
			</Row>
		</Container>
	)
}

export default Layout