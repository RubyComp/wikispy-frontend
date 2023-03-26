import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setLoader, setTypes } from '../store/searchSlice'
import RadioList from './RadioList/RadioList'

const ListItem = ({value, list, type, name, lang}) => {

	const dispatch = useDispatch()

	const handleChange = () => {
		dispatch(setLoader())
		dispatch(setTypes(type))
	}

	const id = name + '-' + type
	const active = (value == type)

	return (
		<li>
			<Form.Check
				type='radio'
				id={id}
				name={name}
				label={list[type][lang]}
				checked={active}
				onChange={handleChange}
			/>
		</li>
	)
}

const TypesRadioList = (props) => {

	const {title, list} = props

	return (
		<RadioList title={title}>
			{Object.keys(list).map((type) => (
				<ListItem
					key={type}
					item={list[type]}
					active={false}
					type={type}
					{...props}
				/>
			))}
		</RadioList>
	)

}

export default TypesRadioList