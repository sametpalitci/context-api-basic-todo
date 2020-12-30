import React, { Component, createContext } from 'react';

const todoContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "EKLE":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;
    }
}

export class Provider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    todo: "yapilacaklistesi",
                    id: 1
                },
                {
                    todo: "yapilacaklistesi",
                    id: 2
                }
            ],
            dispatch: action => {
                this.setState(state => reducer(state, action))
            }
        }
    }
    render() {
        return (
            <todoContext.Provider value={this.state}>
                {this.props.children}
            </todoContext.Provider>
        );
    }
}
const consumer = todoContext.Consumer;

export default consumer;