import React from 'react'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			redirectToReferrer: false
		}
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
				<button onClick={this.login}>Log in</button>
			</div>
		)
	}
}

export default Login
