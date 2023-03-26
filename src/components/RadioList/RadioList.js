import React from 'react'
// import './CheckList.css'

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









// import React from 'react'
// import { Form } from 'react-bootstrap'
// import './RadioList.css'

// // const checkValue = (list, val) => {
// // 	return list.indexOf(parseInt(val)) !== -1
// // }
// // checkValue(values, ns)

// const List = ({title = '', list, name, value, disabled, lang}) => {

// 	return (
// 		<div className="mb-4">
// 			<div className="mb-2 list-title">{title}</div>
// 			<ul>
// 				{Object.keys(list).map((id) => (
// 					<li key={id}>
// 						<Form.Check
// 							type='radio'
// 							id={`${name}-${id}`}
// 							name={name}
// 							label={list[id][lang]}
// 							disabled={disabled}
// 							defaultChecked={value == id}
// 							checked={true}
// 						/>
// 					</li>
					
// 				))}
// 			</ul>
// 		</div>
// 	)
// }

// const RadioList = (props) => {

// 	return (
// 		<List {...props}/>
// 	)
// }

// export default RadioList
