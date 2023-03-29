import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allNamespaces from '../../helpers/allNamespaces'
import { setNamespaces } from '../../store/searchSlice'
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
const getNamespacesByList = (list) => {
	return Object.keys(list).map(Number)
}
const objectHasProperty = (obj, name) => {
	return Object.prototype.hasOwnProperty.call(obj, name)
}
const updateList = (arr1, arr2, action) => {
	if (action === 'add') {
		const combined = arr1.concat(arr2)
		const result = combined.filter((value, index) => 
			combined.indexOf(value) === index
		)
		return result
	}
	if (action === 'del')
		return arr1.filter((value) => !arr2.includes(value))
}

const SearchControl = () => {

	const namespacesLists = {
		'common': {
			'title': 'Major namespaces',
		},
		'talk': {
			'title': 'Talk ns'
		},
		'user': {
			'title': 'User ns'
		},
		'other': {
			'title': 'Other ns'
		},
		'legacy': {
			'title': 'Legacy ns'
		},
	}

	const dispatch = useDispatch()

	const namespaces = useSelector(state => state.search.namespaces)
	const types = useSelector(state => state.search.types)

	const updateNamespaces = (list, action) => {
		const nsToAction = getNamespacesByList(list)
		const ns = updateList(namespaces, nsToAction, action)
		dispatch(setNamespaces(ns))
	}

	for (let key in allNamespaces) {

		const nsInfo = allNamespaces[key]
		const catKey = nsInfo['cat'] || 'other'
		const catData = namespacesLists[catKey]

		if (!objectHasProperty(catData, 'list'))
			catData['list'] = []

		catData['list'][key] = nsInfo

	}

	return (
		<div id="SearchControl" className="mt-2 mb-3">
			<TypesRadioList
				title="Page types"
				list={typesList}
				lang="canonical"
				name="page-searches"
				value={types}
			/>
			{Object.keys(namespacesLists).map((key) => (
				<div key={key}>
					<hr />
					<NSChecksList
						key={`${key}-ns`}
						title={namespacesLists[key]['title']}
						list={namespacesLists[key]['list']}
						lang="canonical"
						name={`${key}-ns`}
						values={namespaces}
						checkHandler={updateNamespaces}
					/>
				</div>
			))}
		</div>
	)
}

export default SearchControl