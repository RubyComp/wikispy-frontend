import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar as searchIcon } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setPrepareText, } from '../../store/searchSlice'
import './SearchBar.css'

const SearchBar = () => {
	const dispatch = useDispatch()

	const searchBarInput = (event) => {
		dispatch(setPrepareText(event.target.value))
	}

	const btnTitle = 'Search'
	const prepareText = useSelector(state => state.search.prepareText)

	return (
		<InputGroup id="SearchBar" className="mb-4">
			<Form.Control
				placeholder="Input text for search"
				aria-label="Input text for search"
				aria-describedby="basic-addon2"
				size="lg"
				value={prepareText}
				onChange={searchBarInput}
			/>
			<Button variant="primary" type="submit" aria-label={btnTitle} title={btnTitle}>
				<FontAwesomeIcon icon={searchIcon} />
			</Button>
		</InputGroup>
	)
}

export default SearchBar

