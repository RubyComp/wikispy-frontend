import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar as searchIcon } from '@fortawesome/free-regular-svg-icons'
import './SearchBar.css'

const SearchBar = () => {

	return (
		<InputGroup id="SearchBar" className="mb-4">
			<Form.Control
				placeholder="Input text for search"
				aria-label="Input text for search"
				aria-describedby="basic-addon2"
				size="lg"
			/>
			<Button variant="primary" type="submit">
				{/* Search */}
				<FontAwesomeIcon icon={searchIcon} />
			</Button>
		</InputGroup>
	)
}

export default SearchBar

