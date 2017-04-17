import React from 'react'
import ReactDOM from 'react-dom'
import FirstPage from './FirstPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Firstpage />, div)
})

