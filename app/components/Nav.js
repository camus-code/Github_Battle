import React from 'react'; // always need to require react in components
import { NavLink } from 'react-router-dom';


//Doesn't have state so navbar is stateless functional component
export default function Nav () {
	return (
		<ul className='nav'>
			<li>
				<NavLink exact activeClassName='active' to='/'>
				Home
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' to='/battle'>
				Battle
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' to='/popular'>
				Popular
				</NavLink>
			</li>
		</ul>
	)
}

// have to export each component