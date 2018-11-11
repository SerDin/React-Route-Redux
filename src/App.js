import React from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Login from './components/Login'
import News from './components/News'
import Profile from './components/Profile'
import Home from './components/Home'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			login: 'root',
			password: 'admin',
			checkLogin: null
		}
	}

	// componentWillMount() {
	// 	window.localStorage.setItem('login', 'root')
	// 	window.localStorage.setItem('password', 'admin')
	// }

	checkLogin = () => {
		console.log(this.state.checkLogin)
		this.setState({ checkLogin: true })
		console.log(this.state.checkLogin)
	}

	render() {
		return (
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/news">News</Link>
						</li>
						<li>
							<Link
								to={this.state.checkLogin ? '/profile' : '/login'}
							>
								Profile
							</Link>
						</li>
					</ul>
				</nav>
				<Route exact path="/" component={Home} />
				<Route path="/news" component={News} />
				<Route
					path={'/profile'}
					component={() => (
						<Profile
							login={this.state.login}
							password={this.state.password}
						/>
					)}
				/>
				<Route
					path="/login"
					component={() => <Login checkLogin={this.checkLogin} />}
				/>
			</div>
		)
	}
}

export default App
