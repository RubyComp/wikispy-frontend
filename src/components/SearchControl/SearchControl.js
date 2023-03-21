import React from 'react'
import namespaces from '../../helpers/namespaces'
import CheckList from '../CheckList/CheckList'
import RadioList from '../RadioList/RadioList'

// const Select = ({list, inKey, withId}) => {

// 	return (
// 		<Form.Select aria-label="Default select">
// 			{Object.keys(list).map((id) => (
// 				<option key={id} value={id}>
// 					{ (withId ? `${id}: ` : '') + list[id][inKey] }
// 				</option>
// 			))}
// 		</Form.Select>
// 	)
// }

// const searchPlaces = {
// 	title: {
// 		text: 'Title',
// 	},
// 	content: {
// 		text: 'Content'
// 	}
// }

const revSearches = {
	newest: {
		canonical: 'Last revisions only',
	},
	all: {
		canonical: 'All revisions',
	},
	old: {
		canonical: 'Olden revisions only'
	}
}

const pageSearches = {
	master: {
		canonical: 'Master pages only',
	},
	all: {
		canonical: 'Master and Subpages',
	},
	sub: {
		canonical: 'Subpages only'
	}
}

const SearchControl = () => {

	let commonNamespaces = {}
	let otherNamespaces = {}

	for (let key in namespaces) {

		if (namespaces[key].common === true)
			commonNamespaces[key] = namespaces[key]
		else
			otherNamespaces[key] = namespaces[key]

	}

	return (
		<div id="SearchControl" className="mt-2 mb-3">

			{/* <Stack direction="horizontal" gap={5} className="d-flex justify-content-center"> */}
			<RadioList list={pageSearches} name="page-searches" title="Page types" />
			<RadioList list={revSearches} name="rev-searches" value="newest" title="Revisons" disabled />
			{/* </Stack> */}

			<hr />

			<CheckList title="Namespaces" list={commonNamespaces} inKey="canonical" name="major-namespaces" withId />
			<CheckList title="" list={otherNamespaces} inKey="canonical" name="other-namespaces" withId />


			{/* <ListGroup className="detail-card pt-3 pb-4" variant="flush">
				<ListGroup.Item>
					<Stack className="align-items-start justify-content-center" direction="horizontal" gap={4}>
						<div>1</div>
						<div>1</div>
						<div>1</div>
						<div>1</div>
					</Stack>
				</ListGroup.Item>
				<ListGroup.Item>Morbi leo risus</ListGroup.Item>
				<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
			</ListGroup> */}
		</div>
	)
}

export default SearchControl