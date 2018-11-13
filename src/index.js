import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AuthExample from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<AuthExample />
	</BrowserRouter>,
	document.getElementById('root')
)
