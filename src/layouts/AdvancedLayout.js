import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AdvancedLayout = ({head, main, aside}) => {
	return (
		<Container id="AdvancedLayout" className="pb-5">
			{/* <Row>
			</Row> */}
			<Row>
				<Col lg="3">
					{aside}
				</Col>
				<Col>
					{head}
					{main}
				</Col>
			</Row>
		</Container>
	)
}

export default AdvancedLayout