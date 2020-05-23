import React from 'react'
import FlipMove from 'react-flip-move'

export default class TodoItems extends React.Component {
   constructor(props) {
      super(props)

      this.createTodo = this.createTodo.bind(this)
      this.delete = this.delete.bind(this)
   }

   createTodo(item) {
      return <li onClick={() => this.delete(item.key)}
         key={item.key}>{item.text}</li>
   }

   delete(item) {
      this.props.delete(item)
   }

   render() {
      const todoEntries = this.props.entries
      const listItems = todoEntries.map(this.createTodo)
      return (
         <ul className='theList'>
            <FlipMove duration={250} easing='ease-out'>
               {listItems}
            </FlipMove>
         </ul>
      )
   }
}