import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  }

  state = {
    showContactInfo: false,
  };

  onShowClick = (name) => {
    this.setState({showContactInfo: !this.state.showContactInfo});
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
  }

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {contact.name}{' '}
                <i
                  onClick={this.onShowClick.bind(this, contact.name)}
                  className="fas fa-sort-down"
                  style={{cursor: 'pointer'}}
                />
                <i
                  className="fas fa-times"
                  style={{cursor: 'pointer', color: 'red', float: 'right'}}
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    )
  }
}

export default Contact;
