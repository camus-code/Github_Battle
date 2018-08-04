var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom'); // for react (not native)
var Router = ReactRouter.BrowserRouter; // on the web
var Route = ReactRouter.Route; // gonna have routes
var Switch = ReactRouter.Switch; // URL switching
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results');

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
	        	<Route render={function () {
	        		return <p>Not found</p>
	        	}} />
    			</Switch>
      	</div>
    	</Router>
     
    )
  }
}

module.exports = App;