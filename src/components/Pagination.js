import React from 'react'
import { Pagination as BootstrapPagination } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/searchSlice'
import paginate from '../utility/paginate'

const Item = ({elem, active}) => {
	const dispatch = useDispatch()

	const changePage = () => {
		if (Number.isInteger(elem))
			dispatch(setPage(elem))
	}

	return (
		<BootstrapPagination.Item key={elem} active={active} onClick={changePage}>
			{elem}
		</BootstrapPagination.Item>
	)
}

// const page = useSelector(state => state.search.page)

const Pagination = ({paginator}) => {

	const pagi = paginate({
		current: paginator.page,
		max: paginator.total
	})

	return (
		<div className={'w100 d-flex justify-content-center mt-4'}>
			<BootstrapPagination>
				{pagi.items.map((elem, counter) => (
					<Item key={elem + '-' + counter} elem={elem} active={pagi.current === elem}/>
				))}
			</BootstrapPagination>
		</div>
	)
}

export default Pagination