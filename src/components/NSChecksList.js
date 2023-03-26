import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setLoader, toggleNamespace } from '../store/searchSlice'
import CheckList from './CheckList/CheckList'

const ListItem = ({list, name, lang, showId, ns, active}) => {

	const dispatch = useDispatch()
	const namespaces = useSelector(state => state.search.namespaces)

	const handleChange = () => {
		dispatch(setLoader())
		dispatch(toggleNamespace({namespaces, ns}))
	}

	const id = name + '-' + ns

	const baseLabel = list[ns][lang]
	const labelSuffix = (showId ? `(${id})` : '')
	const labelText = baseLabel + labelSuffix

	return (
		<li>
			<Form.Check
				type='checkbox'
				id={id}
				name={name}
				label={labelText}
				checked={active}
				onChange={handleChange}
			/>
		</li>
	)
}

const checkValue = (list, val) => {
	return list.indexOf(parseInt(val)) !== -1
}

const NSChecksList = (props) => {

	const {list, values} = props

	return (
		<CheckList>
			{Object.keys(list).map((ns) => (
				<ListItem
					key={ns}
					item={list[ns]}
					active={checkValue(values, ns)}
					ns={ns}
					{...props}
				/>
			))}
		</CheckList>
	)

}

export default NSChecksList