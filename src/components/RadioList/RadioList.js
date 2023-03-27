import React from 'react'

const ListTitle = ({text}) => {
	return (
		<div className="mb-2 list-title">
			{text}
		</div>
	)
}

const CheckList = ({title, children}) => {

	return (
		<div>
			<ListTitle text={title}/>
			<ul className="list">
				{children}
			</ul>
		</div>
	)

}

export default CheckList