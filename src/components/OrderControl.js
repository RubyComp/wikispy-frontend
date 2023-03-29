import React from 'react'
import { Button, ButtonGroup, Stack } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import config from '../config'
import { setDirect, setOrder } from '../store/searchSlice'

import iconDec from '../upload/img/icons/sort-dec.svg'
import iconInc from '../upload/img/icons/sort-inc.svg'

const OrderItem = ({title, value, selected}) => {

	const dispatch = useDispatch()

	const clickHandler = () => {
		dispatch(setOrder(value))
	}

	return (
		<Button
			variant={selected ? 'secondary' : 'outline-secondary'}
			size="sm"
			value={value}
			disabled={selected}
			onClick={clickHandler}
		>
			{title}
		</Button>
	)
}
const OrdersList = () => {

	const items = config.orders
	const value = useSelector(state => state.search.order)

	return (
		<ButtonGroup>
			{Object.keys(items).map((key) => (
				<OrderItem
					key={`${key}-order`}
					title={items[key]}
					value={key}
					selected={value == key}
				/>
			))}
		</ButtonGroup>
	)
}

const OrderDirectionBtn = () => {

	const dispatch = useDispatch()
	const direct = useSelector(state => state.search.direct)

	const isDesc = (direct == 'desc')

	const icon = (isDesc) ? iconDec : iconInc
	const newValue = (isDesc) ? 'asc' : 'desc'

	const clickHandler = () => {
		dispatch(setDirect(newValue))
	}

	return (
		<Button
			variant={'link'}
			size="sm"
			onClick={clickHandler}
			title={direct}
		>
			<img src={icon} alt={direct} />
		</Button>
	)
}

const OrderControl = () => {
	return (
		<Stack direction="horizontal" gap={1}>
			<div>Order:</div>
			<OrderDirectionBtn />
			<OrdersList />
		</Stack>
	)
}

export default OrderControl