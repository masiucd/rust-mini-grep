import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/customerActions';
import Customer from './Contact';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div>
        {contacts.map(contact => (
          <Customer key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

Contacts.propTypes = {
  getContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ contacts: state.contacts.contacts });
export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
