import React from 'react'
import { Form } from 'react-bootstrap'
import './CheckList.css'

const CheckList = ({title = '', list, inKey, name, withId}) => {

	return (
		<div>
			<div className="mb-2 list-title">{title}</div>
			<ul className="list">
				{Object.keys(list).map((id) => (
					<li key={id}>
						<Form.Check 
							type='checkbox'
							id={`${name}-${id}`}
							name={name}
							label={ list[id][inKey] + (withId ? ` (${id})` : '') }
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CheckList
