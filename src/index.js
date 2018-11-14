import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AuthExample from './App'
import { Provider } from 'react-redux'
import { store } from './components/Redux/Store'

ReactDOM.render(
	<Provider store={store}>
		<AuthExample />
	</Provider>,
	document.getElementById('root')
)
