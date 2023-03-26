import React from 'react'
import { useSelector } from 'react-redux'
import allNamespaces from '../../helpers/allNamespaces'
import CheckList from '../CheckList/CheckList'
import NSChecksList from '../NSChecksList'
import RadioList from '../RadioList/RadioList'
import TypesRadioList from '../TypesRadioList'

// const Select = ({list, lang, withId}) => {

// 	return (
// 		<Form.Select aria-label="Default select">
// 			{Object.keys(list).map((id) => (
// 				<option key={id} value={id}>
// 					{ (withId ? `${id}: ` : '') + list[id][lang] }
// 				</option>
// 			))}
// 		</Form.Select>
// 	)
// }

// const searchPlaces = {
// 	title: {
// 		text: 'Title',
// 	},
// 	content: {
// 		text: 'Content'
// 	}
// }

// const revSearches = {
// 	newest: {
// 		canonical: 'Last revisions only',
// 	},
// 	all: {
// 		canonical: 'All revisions',
// 	},
// 	old: {
// 		canonical: 'Olden revisions only'
// 	}
// }

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

			{/* <RadioList list={revSearches} name="rev-searches" value="newest" title="Revisons" disabled /> */}

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