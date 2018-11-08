import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
	render() {
		const Header = () => (
			<header>
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
			</header>
		)
		return <div>Welcome to Home {Header}</div>
	}
}

export default Home
