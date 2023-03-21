import React from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

const ModeButtons = (props) => {

	const {list, keyname, state, onChange, ...rest} = props

	return (
		<ButtonGroup>
			{list.map((radio, idx) => (
				<ToggleButton
					key={idx}
					id={`${keyname}-${idx}`}
					type="radio"
					variant="outline-primary"
					name={keyname}
					value={radio.value}
					checked={state === radio.value}
					onChange={onChange}
					{...rest}
				>
					{radio.name}
				</ToggleButton>
			))}
		</ButtonGroup>
	)
}

export default ModeButtons