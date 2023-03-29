import React from 'react'
import { Button, ButtonGroup, ListGroup, Stack } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import getNameSpaceTitle from '../../utility/namespaces'
import wikiUrl from '../../utility/wikiUrl'
import Loader from '../Loader/Loader'
import NamespacePrefix from '../NamespacePrefix'
import OrderControl from '../OrderControl'
import Pagination from '../Pagination'
import './SearchResults.css'

const PageIdSuffix = ({id}) => {
	return (
		<sub style={{opacity:'.5', paddingLeft:'.3em'}} title="Page ID">({id})</sub>
	)
}

const LinkBtn = ({title, url}) => {

	const handleClick = () => {
		window.open(url, '_blank')
	}

	return (
		<Button variant="secondary" onClick={handleClick}>{title}</Button>
	)
}

const ResultItem = ({elem}) => {

	const ns = getNameSpaceTitle(elem.ns, true)
	const fullTitle = ns + elem.title

	return (
		<ListGroup.Item className="ResultItem">
			<div className="ResultItem__main">
				<div>
					<NamespacePrefix id={elem.ns}/>{elem.title} <PageIdSuffix id={elem.id}/>
				</div>
				
				<ButtonGroup className="hiddenActions">
					<LinkBtn
						title="Page"
						url={wikiUrl('view', fullTitle)}
					/>
					<LinkBtn
						title="Raw"
						url={wikiUrl('raw', fullTitle)}
					/>
					<LinkBtn
						title="Edit"
						url={wikiUrl('edit', fullTitle)}
					/>
					<LinkBtn
						title="History"
						url={wikiUrl('history', fullTitle)}
					/>
					<LinkBtn
						title="Version"
						url={wikiUrl('rev', elem.lastrev)}
					/>
				</ButtonGroup>
			</div>
			<div className="row-badge" title="Revision ID">
				{elem.lastrev}
			</div>
			{/* <Badge bg="secondary" pill>
				{elem.lastrev}
			</Badge> */}
		</ListGroup.Item>
	)
}

const ResultList = ({list}) => {
	return (
		<ListGroup defaultActiveKey="#link1">
			{list.map((elem) => (
				<ResultItem key={'r-item-' + elem.lastrev} elem={elem}/>
			))}
		</ListGroup>
	)
}

const ResultNote = ({offset = 0, limit = 0, count = 0, text = ''}) => {

	const max = offset + limit
	const last = (max > count) ? count : max
	const pos = `${offset + 1}-${last}`

	return (
		<div>
			Results: {pos} / <b>{count}</b>, for <i>{text}</i>
		</div>
	)
}

const SearchResults = ({data}) => {

	const isLoaded = useSelector(state => state.search.loader)

	if(!data || data.length < 1 || isLoaded)
		return <Loader/>

	const list = data['result']['data']

	if (!list.length)
		return 'No results'

	const count = data['count']
	const text = data['text']

	const paginator = data['paginator']
	const limit = paginator['limit']
	const offset = paginator['offset']
	
	// useEffect(() => {
	// 	console.log('————:', 'effect')
	// 	// window.scrollTo(0, 0)
	// }, [])


	return (
		<>
			<Stack direction="horizontal" gap={3} className="mb-2">
				<ResultNote
					offset={offset}
					limit={limit}
					count={count}
					text={text}
				/>
				<div className="ms-auto">
					<OrderControl />
				</div>
			</Stack>
			<ResultList list={list} />
			<Pagination paginator={paginator} />
		</>
	)

}

export default SearchResults