import React from 'react'
import { Table } from 'react-bootstrap'

const convertData = (raw) => {
	const data = raw[0]['labels'].map((label, index) => {
		const [month, year] = label.split(';')
		return [
			+year,
			+month,
			raw
				.datasets[0]
				.data[index]
		]

	})

	return data
}

const Rows = ({data}) => {

	const formatedData = convertData(data).reverse()

	return (
		<tbody>
			{formatedData.map((elem, id) => (
				<tr key={`row-${id}`}>
					<td>{id}</td>
					<td>{elem[0]}</td>
					<td>{elem[1]}</td>
					<td>{elem[2]}</td>
				</tr>
			))}
		</tbody>
	)

}

const RevsTable = ({data, loading}) => {

	if (data && Object.keys(data).length) {
		return (
			<Table striped bordered className={loading ? 'loading' : ''}>
				<thead>
					<tr>
						<th>№</th>
						<th>Year</th>
						<th>Mounth</th>
						<th>Count</th>
					</tr>
				</thead>
				<Rows data={data} />
			</Table>
		)
	}
	
}

export default RevsTable