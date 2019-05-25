import React, { Component } from 'react';
import styled from 'styled-components';
import { DownArrowAlt } from 'styled-icons/boxicons-regular/DownArrowAlt';
import { Delete } from 'styled-icons/typicons/Delete';

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
    const { name, email, phone } = this.props.customer;
    const { show } = this.state;
    return (
      <Card>
        <div className="card-body">
          <h3>
            Name: {name}{' '}
            <span onClick={this.toggleShow}>
              {' '}
              <DownArrowAlt size="35" />{' '}
            </span>{' '}
            <span className="delete-icon">
              {' '}
              <Delete size="35" />{' '}
            </span>
          </h3>

          {show ? (
            <>
              <p>Email: {email}</p> <p>Phone: {phone}</p>{' '}
            </>
          ) : null}
        </div>
      </Card>
    );
  }
}

const Card = styled.div`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40vw;
  margin: 0 auto;
  margin-top: 2rem;
  &:hover {
    box-shadow: 0 8px 20px 0 rgba(222, 222, 222, 0.2);
  }
  /* Add some padding inside the card container */
  .card-body {
    padding: 2px 16px;
    h3 {
      border-bottom: 1px solid #fff;
      font-size: 2.3rem;
    }
    p {
      font-size: 1.8rem;
      text-align: center;
    }
    h3,
    p {
      margin: 0.3rem 0;
    }
    .delete-icon {
      float: right;
    }
  }
`;
