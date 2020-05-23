import React from 'react'
import { render } from 'react-dom'

export default class TodoItems extends React.Component {
   constructor(props) {
      super(props)

      this.createTodo = this.createTodo.bind(this)
   }

   createTodo(item) {
      return <li key={item.key}>{item.text}</li>
   }

   render() {
      const todoEntries = this.props.entries
      const listItems = todoEntries.map(this.createTodo)
      return (
         <ul>
            {listItems}
         </ul>
      )
   }
}