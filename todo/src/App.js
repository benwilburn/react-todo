import React, { PureComponent } from 'react';
import './App.css';
import { Form, Input, List } from './components'

class App extends PureComponent {
  state = {
    term: '',
    items: [],
    editing: false,
    itemToEdit: null,
  }

  onChange = ({target: {value}}) => this.setState({ term: value })

  deleteItem = deletion => {
    const items = [...this.state.items.filter(item => item !== deletion)]
    this.setState({ items })
  }

  editItem = item =>
    this.setState({ term: item, editing: true, itemToEdit: item })

  editSubmit = event => {
    event.preventDefault()
    const {items, itemToEdit, term} = this.state
    const itemToEditIndex = items.indexOf(itemToEdit)
    const newItemsArray = [...items]
    newItemsArray[itemToEditIndex] = term
    this.setState({
      term: '',
      items: newItemsArray,
      editing: false,
      itemToEdit: null,
    })
  }

  onSubmit = event => {
    event.preventDefault()
    const{items, term} = this.state
    this.setState({
      term: '',
      items: [...items, term],
      editing: false
    })
  }

  render() {
    const {editing, items, term} = this.state
    return (
      <div>
        <Form buttonText={editing ? 'Edit' : 'Add'} callback={editing ? this.editSubmit : this.onSubmit}>
          <Input editing={editing} contents={term} callback={this.onChange} />
        </Form>
        <List onDelete={this.deleteItem} onEdit={this.editItem} items={items} />
      </div>
    );
  }
}

export default App;
