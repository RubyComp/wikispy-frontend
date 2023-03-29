import React from 'react'
import './Pre.css'

const Pre = ({text}) => {
	return (
		<textarea className="Pre" disabled>
			{text}
		</textarea>
	)
}

export default Pre