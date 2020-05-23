import React from 'react'

import TodoItems from './TodoItems'

export default class Todolist extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         items: []
      }

      this.addItems = this.addItems.bind(this)
   }

   addItems(e) {
      const itemsArray = this.state.items
      if (this._inputElement.value !== '') {
         itemsArray.unshift({
            text: this._inputElement.value,
            key: Date.now()
         })
         this.setState({
            items: itemsArray
         })
         this._inputElement.value = ''
      }
      console.log(itemsArray)
      e.preventDefault()
   }

   render() {
      return (
         <div>
            <div>
               <form onSubmit={this.addItems}>
                  <input
                     type="text"
                     placeholder='enter todo'
                     ref={(el) => this._inputElement = el}
                  />
                  <button type='submit'>Add</button>
               </form>
               <TodoItems entries={this.state.items} />
            </div>
         </div>
      )
   }
}