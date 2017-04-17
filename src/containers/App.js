import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import NoMatch from '../components/NoMatch'

export default class App extends Component {
  render(){
    return (
      <div>
        <h1>Server Side Rendering with Create React App v2</h1>
        <p>Hey, so I've rewritten this example with react-router v4</p>
        <p>This code is on github: <a href='https://github.com/ayroblu/ssr-creat-react-app-v2'>https://github.com/ayroblu/ssr-creat-react-app-v2</a></p>
        <p>Medium article: <a href=''></a></p>
        <Switch>
          <Route exact path="/" component={FirstPage}/>
          <Route path="/second" component={SecondPage}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
