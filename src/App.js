import Login from './components/Login'
import News from './components/News'
import Profile from './components/Profile'
import Home from './components/Home'

import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter,
	Redirect
} from 'react-router-dom'

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true
		setTimeout(cb, 100)
	},
	signout(cb) {
		this.isAuthenticated = false
		setTimeout(cb, 100)
	}
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			fakeAuth.isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
)

const AuthButton = withRouter(({ history }) =>
	fakeAuth.isAuthenticated ? (
		<p>
			Welcome!{' '}
			<button
				onClick={() => {
					fakeAuth.signout(() => history.push('/'))
				}}
			>
				Sign out
			</button>
		</p>
	) : (
		<div>You is not logined</div>
	)
)

export default function AuthExample() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/news">News</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
				</ul>{' '}
				<AuthButton />
				<Route exact path="/" component={Home} />
				<Route path="/news" component={News} />
				<Route
					path="/login"
					component={() => <Login fakeAuth={fakeAuth} />}
				/>
				<PrivateRoute path="/profile" component={() => <Profile />} />
			</div>
		</Router>
	)
}
