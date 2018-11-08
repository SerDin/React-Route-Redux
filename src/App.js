import React from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Login from './components/Login'
import News from './components/News'
import Profile from './components/Profile'
import Home from './components/Home'

class App extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/login">login</Link>
						</li>
						<li>
							<Link to="/news">news</Link>
						</li>
						<li>
							<Link to="/profile">profile</Link>
						</li>
					</ul>
				</nav>

				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/news" component={News} />
				<Route path="/profile" component={Profile} />
			</div>
		)
	}
}

export default App
