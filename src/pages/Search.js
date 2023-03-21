import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import SearchControl from '../components/SearchControl/SearchControl'
import SearchResults from '../components/SearchResults'
import config from '../config'
import useFetch from '../hooks/useFetch'
import AdvancedLayout from '../layouts/AdvancedLayout'

const Search = () => {

	const url = config.api.search
	const api = `${url}&text=Пустошь_Мохаве`

	const [data] = useFetch(api)

	return (
		<AdvancedLayout
			head = {<SearchBar />}
			aside = {<SearchControl />}
			main = {<SearchResults data={data} />}
		/>
	)
}

export default Search