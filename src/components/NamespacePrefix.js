import React from 'react'
import getNameSpaceTitle from '../utility/namespaces'

const NamespacePrefix = ({id}) => {

	const name = getNameSpaceTitle(id)

	if (name.length > 0)
		return <span style={{opacity:.5, paddingRight:'.3em'}}>{name}:</span>
	else
		return ''
}

export default NamespacePrefix