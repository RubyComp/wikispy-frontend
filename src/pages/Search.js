import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../components/SearchBar/SearchBar'
import SearchControl from '../components/SearchControl/SearchControl'
import SearchResults from '../components/SearchResults/SearchResults'
import config from '../config'
import useFetch from '../hooks/useFetch'
import AdvancedLayout from '../layouts/AdvancedLayout'
import { setLoader, setText, unsetLoader } from '../store/searchSlice'

const NoSearch = () => {
	return (
		<div className={'w100 d-flex justify-content-center mt-5 loading fs-5'}>
			Insert text to field and press search button.
		</div>
	)
}

const Search = () => {

	const dispatch = useDispatch()
	const prepareText = useSelector(state => state.search.prepareText)

	const searchSubmit = (event) => {
		event.preventDefault()
		dispatch(setText(prepareText))
		dispatch(setLoader())
	}

	const text = useSelector(state => state.search.text)
	const page = useSelector(state => state.search.page)
	const types = useSelector(state => state.search.types)
	const order = useSelector(state => state.search.order)
	const direct = useSelector(state => state.search.direct)
	const namespaces = useSelector(state => state.search.namespaces)

	const url = config.api.search
	const api = `${url}&text=${text}&types=${types}&page=${page}&nspaces=${namespaces}&order=${order}&direct=${direct}`

	const [data] = useFetch(api)[0]

	useEffect(() => {
		if (data) {
			dispatch(unsetLoader())
		}
	}, [data])

	return (
		<form onSubmit={searchSubmit}>
			<AdvancedLayout
				head = {<SearchBar />}
				aside = {<SearchControl />}
				main = {(text.length > 0) ? <SearchResults data = {data} /> : <NoSearch />}
			/>
		</form>
	)
}
export default Search