import React from 'react'
import { useSelector } from 'react-redux'
import allNamespaces from '../../helpers/allNamespaces'
import NSChecksList from '../NSChecksList'
import TypesRadioList from '../TypesRadioList'

const typesList = {
	all: {
		canonical: 'Master and Subpages',
		value: [0, 1]
	},
	master: {
		canonical: 'Master pages only',
		value: [0]
	},
	sub: {
		canonical: 'Subpages only',
		value: [1]
	}
}

const SearchControl = () => {

	let commonNamespaces = {}
	let otherNamespaces = {}

	for (let key in allNamespaces) {

		if (allNamespaces[key].common === true)
			commonNamespaces[key] = allNamespaces[key]
		else
			otherNamespaces[key] = allNamespaces[key]

	}

	const namespaces = useSelector(state => state.search.namespaces)
	const types = useSelector(state => state.search.types)

	return (
		<div id="SearchControl" className="mt-2 mb-3">

			<TypesRadioList
				title="Page types"
				list={typesList}
				lang="canonical"
				name="page-searches"
				value={types}
			/>
			<hr />

			<NSChecksList
				title="Namespaces"
				list={commonNamespaces}
				lang="canonical"
				name="major-namespaces"
				values={namespaces}
			/>
			<NSChecksList
				title=""
				list={otherNamespaces}
				lang="canonical"
				name="other-namespaces"
				values={namespaces}
			/>
		</div>
	)
}

export default SearchControl