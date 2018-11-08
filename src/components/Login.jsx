import React from 'react'

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: '' }
	}

	handleChange = e => {
		const login = e.traget.value
		this.setState({ value: login })
	}
	render() {
		return (
			<div>
				Welcome to Login page
				<input
					type="text"
					value={this.state.value}
					placeholder="Write login"
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		)
	}
}

export default Login
