import React from 'react'
import { NavLink } from 'react-router-dom'

const ListItem = ({to, name}) => {
	return (
		<li className="nav-item">
			<NavLink className="nav-link" to={to}>{name}</NavLink>
		</li>
	)
}

const Header = () => {

	const navList = [
		// {
		// 	path: '/',
		// 	name: 'Home'
		// },
		{
			path: '/search',
			name: 'Search'
		},
		{
			path: '/stats',
			name: 'Stats'
		}
	]

	return (
		<div className="container">
			<header className="d-flex justify-content-center py-3">
				<ul className="nav nav-pills">
					{navList.map( item => {
						const {path, name} = item
						return <ListItem key={path} to={path} name={name} />
					})}
				</ul>
			</header>
		</div>
	)
}

export default Header