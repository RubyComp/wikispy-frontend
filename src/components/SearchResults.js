import React from 'react'
import { Pagination } from 'react-bootstrap'
import config from '../config'

const ResultList = ({data, loading}) => {
	console.log(data[0])
	const list = data[0]['result']['data']

	const revLink = config.wiki.url + '?oldid='

	return (
		<ul className={`list-group list-group-flush ${loading ? 'loading' : ''}`}>
			{list.map((elem, id) => (
				<li key={`s-${elem.id}-${id}`} className="list-group-item">
					<a href={revLink + elem.lastrev} target="_blank" rel="noreferrer">
						{elem.title} <small>({elem.id} - {elem.lastrev})</small>
					</a>
				</li>
			))}
		</ul>
	)
}
const ResultPagination = ({loading}) => {

	let active = 2
	let items = []

	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>
		)
	}

	return (
		<div className={`w100 d-flex justify-content-center mt-4 ${loading ? 'loading' : ''}`}>
			<Pagination>{items}</Pagination>
		</div>
	)
}

const SearchResults = ({data, loading}) => {

	return (
		<>
			<ResultList data={data} loading={loading} />
			<ResultPagination loading={loading} />
		</>
	)

}

export default SearchResults