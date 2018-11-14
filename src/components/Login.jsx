import React from 'react'
import { Redirect } from 'react-router-dom'
import Logined from './Logined'

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			redirectToReferrer: false
		}
	}

	componentDidMount() {
		window.localStorage.setItem('login', 'admin')
		window.localStorage.setItem('password', '12345')
	}

	login = () => {
		this.props.fakeAuth.authenticate(() => {
			this.setState(() => ({
				redirectToReferrer: true
			}))
		})
	}
	render() {
		const { from } = window.location.state || {
			from: { pathname: '/profile' }
		}
		const { redirectToReferrer } = this.state

		if (redirectToReferrer === true) {
			return <Redirect to={from} />
		}

		return (
			<div>
				<p>You must log in to view the page</p>
				<Logined login={this.login} />
				{/* <button onClick={this.login}>Log in</button> */}
			</div>
		)
	}
}

export default Login
