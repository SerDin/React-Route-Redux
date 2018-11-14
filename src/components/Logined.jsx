import React from 'react'

class Logined extends React.Component {
	constructor(props) {
		super(props)
		this.state = { loginName: '', password: '' }

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(id, event) {
		this.setState({ [id]: event.target.value })
	}

	handleSubmit(event) {
		if (
			window.localStorage.getItem('login').toLocaleLowerCase() ===
				this.state.loginName.toLocaleLowerCase() &&
			window.localStorage.getItem('password') === this.state.password
		) {
			this.props.login()
			console.log('login is OK')
		} else {
			console.log('login is FALSE')
			alert('login and password is FALSE')
		}
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						value={this.state.loginName}
						onChange={this.handleChange.bind(this, 'loginName')}
					/>
					<input
						type="text"
						value={this.state.password}
						onChange={this.handleChange.bind(this, 'password')}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default Logined
