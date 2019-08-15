import React, { Component } from 'react';
//  import PropTypes from  'prop-types';
import { Consumer } from '../Context';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner'

class Contact extends Component {
  state = {
    showContactInfo: false,
    loader: false,
  };

  onShowClick = (name, e) => {

    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  };
  onDeleteClick = async (id, dispatch) => {
    this.setState({ loader: true })

    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      dispatch({ type: 'DELETE_CONTACT', payload: id });

    }
    catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });

    }
    this.setState({ loader: false })
  };
  render() {

    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo, loader } = this.state
    return (

      <Consumer>
        {value => {
          const { dispatch } = value;
          return (

            <div className="container ">
              {loader &&
                <Loader
                  type="Puff"
                  color="#000000"
                  height="100"
                  width="100"
                />}
              <div className="flex-c">
                <div className="card" style={{ width: 500 }}>
                  <div className="card-body">
                    <h5 style={{ cursor: 'pointer' }} className="card-title fa fa-sort-down " onClick={this.onShowClick.bind(this)} >{name}</h5>
                    <i className="fa fa-times" style={{ float: 'right', color: 'red', cursor: 'pointer' }}
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                    <Link to={`contact/edit/${id}`}>
                      <i className="fas fa-pencil-alt" style={{ float: 'right', marginRight: '1rem', color: 'red', cursor: 'pointer' }}></i>
                    </Link>
                    {showContactInfo ? (<ul className="list-group">
                      <li id="asd" className="list-group-item">
                        Email: {email}
                      </li>
                      <li className="list-group-item">
                        Phone: {phone}
                      </li>
                    </ul>) : null}
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>

    )
  }
}
// Contact.propTypes = {
//   ontact: PropTypes.object.isRequired,
//   deleteClickHandler: PropTypes.func.isRequired,
// }
export default Contact
