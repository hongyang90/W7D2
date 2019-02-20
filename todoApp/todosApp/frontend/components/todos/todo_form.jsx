import React from 'react';

const uniqueId = () => (new Date().getTime())

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: uniqueId(),
      body: "",
      title: "",
      done: 'undone'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.receiveTodo(this.state)
    this.setState({
      body: "",
      title: ""
    })
  }



  update (field) {
    return (event) => {
    event.preventDefault();
    this.setState({ [field]: event.currentTarget.value})
  }}

  render () {
    return (
      <>
        <form onSubmit={this.handleSubmit}>Create New Todo:
           <br />
          <label style={{color: '#ff0000'}}>Title:  
            <input type="text" onChange={this.update("title")} value={this.state.title}/>
          </label>
          <br />
          <label>Description: 
            <input type="text" onChange={this.update("body")} value={this.state.body}/>
          </label>
          <br />
          
          <button>Submit Todo</button>
        </form>
        <br />
        <br />

      </>
    )
  }
}

export default TodoForm;