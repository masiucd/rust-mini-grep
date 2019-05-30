import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DownArrowAlt } from 'styled-icons/boxicons-regular/DownArrowAlt';
import { Card } from '../../styles/styled-comp/Card';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState(prev => ({
      show: !prev.show,
    }));
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
                  {' '}
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
