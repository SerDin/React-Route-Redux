import React from 'react'

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			login: '',
			password: '',
			login2: ''
		}
	}

	getText(id, e) {
		let text = e.target.value
		let helperObj = {}
		/// helperObj.id /// - Not working!!!
		helperObj[id] = text //// = {idname: text} {noteText: text}
		this.setState(helperObj) // {noteText: text}

		console.log(helperObj)
		///this.state.currentText = text; Wrong!!!!!
	}

	// handleClickButtonLogin = () =>
	// 	this.setState({ login2: this.state.login })
	render() {
		return (
			<div>
				Welcome to Login page
				<input
					type="text"
					value={this.state.login}
					placeholder="Write login"
					onChange={this.getText.bind(this, 'login')}
				/>
				<input
					type="text"
					value={this.state.password}
					placeholder="Write Password"
					onChange={this.getText.bind(this, 'password')}
				/>
				<button onClick={() => this.props.checkLogin()}>login</button>
				{/* <p>
					{this.state.login2
						? 'Hello ' + this.state.login2
						: 'You is not login, SingIn please'}
				</p> */}
				{localStorage.getItem('login')}
			</div>
		)
	}
}

export default Login
