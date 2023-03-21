import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AdvancedLayout = ({head, main, aside}) => {
	return (
		<Container id="AdvancedLayout" className="pb-5">
			<Row>
				{head}
			</Row>
			<Row>
				<Col lg="2">
					{aside}
				</Col>
				<Col>
					{main}
				</Col>
			</Row>
		</Container>
	)
}

export default AdvancedLayout