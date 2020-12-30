import { Component } from "react";
import Consumer from './Provider';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    }
  }
  addTodo = (dispatch, e) => {
    e.preventDefault();
    const { todoText } = this.state;
    dispatch({ type: "EKLE", payload: {todo:todoText} });
  }
  render() {
    return (
      <Consumer>
        {
          value => {
            const { dispatch } = value;
            return (
              <div>
                <input type="test" onChange={(todoText) => this.setState({ todoText: todoText.target.value })} />
                <button onClick={this.addTodo.bind(this, dispatch)}>Add</button>
                {
                  value.todos.map((n,key) => {
                    return (
                      <div key={key}>
                          <h1>{n.id}</h1>
                          <p> {n.todo} </p>
                      </div>
                    );
                  })
                }
              </div>
            );
          }
        }
      </Consumer>
    );
  }
}
export default App;
