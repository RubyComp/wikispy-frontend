import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import './CheckList.css'

const ListTitle = ({text}) => {
	return (
		<div className="me-auto list-title">
			{text}
		</div>
	)
}

const CheckAll = ({mode, handler}) => {

	let label = ''

	switch (mode) {
		case 'set':
			label = 'Check'
			break
		case 'unset':
			label = 'Uncheck'
			break
	
		default:
			break
	}

	return (
		<Button
			onClick={handler}
			variant="link"
			size="sm"
			className="CheckAll"
		>
			{label}
		</Button>
	)
}
const CheckList = ({title, children, list, checkHandler}) => {

	return (
		<div className="CheckList">
			
			<Stack direction="horizontal" gap={1} className="mb-2">
				<ListTitle text={title}/>
				<CheckAll mode="set" handler={() => checkHandler(list, 'add')}/>
				<CheckAll mode="unset" handler={() => checkHandler(list, 'del')}/>
			</Stack>
			<ul className="list">
				{children}
			</ul>
		</div>
	)

}

export default CheckList