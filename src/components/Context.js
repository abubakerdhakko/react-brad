import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload,
                ...state.contacts]
            }

        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(
                    contact =>
                        contact.id === action.payload.id
                            ? (contact = action.payload)
                            : contact
                )
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    };
    async componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then(response => this.setState({contacts: response.data}))
        //     // .then(json => console.log(json))
        const Response = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({ contacts: Response.data })
    }


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;