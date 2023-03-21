import React from 'react'
import { Form } from 'react-bootstrap'
import './RadioList.css'

const List = ({title = '', list, name, value, disabled}) => {
	return (
		<div className="mb-4">
			<div className="mb-2 list-title">{title}</div>
			<ul>
				{Object.keys(list).map((id) => (
					<li key={id}>
						<Form.Check 
							type='radio'
							id={`${name}-${id}`}
							name={name}
							label={list[id]['canonical']}
							disabled={disabled}
							defaultChecked={value == id}
						/>
					</li>
					
				))}
			</ul>
		</div>
	)
}

const RadioList = (props) => {

	return (
		<List {...props}/>
	)
}

export default RadioList
