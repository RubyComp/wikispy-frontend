import allNamespaces from '../helpers/allNamespaces'

const getNameSpaceTitle = (id, prefix = false) => {

	if (id === 0)
		return ''

	const hasProp = Object.prototype.hasOwnProperty.call(allNamespaces, id)

	if (hasProp)
		return allNamespaces[id]['ru'] + (prefix ? ':' : '')
	else
		return ''
}

export default getNameSpaceTitle