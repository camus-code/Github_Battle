var React = require('react'); // always need to require react in components
var NavLink = require('react-router-dom').NavLink;


//Doesn't have state so navbar is stateless functional component
function Nav () {
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


module.exports = Nav;
// have to export each component