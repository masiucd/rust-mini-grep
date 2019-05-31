import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/customerActions';
import Customer from './Contact';
import { BtnPrimary } from '../../styles/styled-comp/Button';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };
    this.toggleContent = this.toggleContent.bind(this);
  }

  componentDidMount() {
    this.props.getContacts();
  }

  toggleContent() {
    this.setState(prev => ({
      showContent: !prev.showContent,
    }));
  }

  render() {
    const { contacts } = this.props;
    const { showContent } = this.state;
    return (
      <div className="contacts-wrapper">
        <BtnPrimary onClick={this.toggleContent}>Show Contacts</BtnPrimary>
        {showContent
          ? contacts.map(contact => (
              <Customer key={contact.id} contact={contact} />
            ))
          : null}
        {}
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
