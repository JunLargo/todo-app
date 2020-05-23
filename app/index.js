import React from 'react'
import ReactDOM from 'react-dom'

import TodoList from '../component/TodoList'
import './index.css'

class App extends React.Component {
   render() {
      return (
         <TodoList />
      )
   }
}


ReactDOM.render(
   <App />,
   document.getElementById('app')
)