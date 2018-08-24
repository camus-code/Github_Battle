import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // for react (not native)
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
import Popular from './Popular';

class App extends React.Component {
  render() {
    return (
    	<Router>
    		<div className='container'>
    			<Nav />
    			<Switch>
	    			<Route exact path='/' component={Home} />
	    			<Route exact path ='/battle' component={Battle} />
	        	<Route path='/popular' component={Popular} />
	        	<Route path='/battle/results/' component={Results} />
	        	<Route render={() => <p>Not found</p> }/>
    			</Switch>
      	</div>
    	</Router>
    )
  }
}

export default App;


async function handleGetUser () {
  var user = await getUser()
  console.log(user)
}

function handleGetUser () {
  getUser()
    .then((user) => {
      console.log('The user is: ', user)
    })
}