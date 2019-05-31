import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DownArrowAlt } from 'styled-icons/boxicons-regular/DownArrowAlt';
import { Edit2 } from 'styled-icons/feather/Edit2';
import { Delete } from 'styled-icons/material/Delete';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions/customerActions';
import { Card } from '../../styles/styled-comp/Card';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleShow() {
    this.setState(prev => ({
      show: !prev.show,
    }));
  }

  handleDelete(id) {
    this.props.deleteContact(id);
  }

  render() {
    const { id, name, email, phone, username, website } = this.props.contact;
    return (
      <>
        <Card>
          <div className="card-header">
            <h2>{name}</h2>
            <span className="arrow-down">
              {' '}
              <DownArrowAlt size="45" onClick={this.toggleShow} />{' '}
            </span>
            {this.state.show ? (
              <>
                {' '}
                <div className="card-body">
                  <span>
                    {' '}
                    <Delete
                      size="35"
                      onClick={this.handleDelete.bind(this, id)}
                    />{' '}
                  </span>{' '}
                  <span>
                    <Link to={`contact/edit/${id}`}>
                      <Edit2 size="35" />{' '}
                    </Link>
                  </span>{' '}
                  <p>Email: {email} </p> <p>Phone: {phone}</p>{' '}
                  <p> Username: {username}</p> <p>WebSite: {website}</p>{' '}
                </div>{' '}
              </>
            ) : null}
          </div>
        </Card>
      </>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ contacts: state.contact.contact });

export default connect(
  mapStateToProps,
  { deleteContact }
)(Contact);
