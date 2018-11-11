import React from 'react'

class Profile extends React.Component {
	render() {
		return (
			<div>
				Welcome to Profile page
				<p>
					Welcome {this.props.login}
					{this.props.password}
				</p>
			</div>
		)
	}
}

export default Profile
