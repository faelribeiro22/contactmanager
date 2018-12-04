import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  }
  state = {
    showContactInfo: false,
  };
  onShowClick = (name) => {
    this.setState({showContactInfo: !this.state.showContactInfo});
  }

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {contact.name}{' '}
          <i onClick={this.onShowClick.bind(this, contact.name)} className="fas fa-sort-down"></i>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {contact.email}</li>
            <li className="list-group-item">Phone: {contact.phone}</li>
          </ul>
        ) : null}
      </div>
    )
  }
}

export default Contact;
