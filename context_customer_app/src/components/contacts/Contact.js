import React, { Component } from 'react';
import styled from 'styled-components';
import { DownArrowAlt } from 'styled-icons/boxicons-regular/DownArrowAlt';
import { Delete } from 'styled-icons/typicons/Delete';
import { Consumer } from '../../context';
import { mainColurs } from '../../global/Globalstyles';
import { DELETE_CONTACT } from '../../types';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  toggleShow() {
    this.setState(prev => ({
      show: !prev.show,
    }));
  }

  onDeleteClick(id, dispatch) {
    dispatch({ type: DELETE_CONTACT, payload: id });
  }

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { show } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <Card size="2.5rem" border padding=" 2px 16px">
                <div className="card-body">
                  {' '}
                  <DownArrowAlt onClick={this.toggleShow} size="35" />{' '}
                  <span>
                    <Delete
                      size={35}
                      className="delete-icon"
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}
                    />
                  </span>
                  <h3> name: {name} </h3>
                  {show ? (
                    <>
                      {' '}
                      <p>email : {email}</p> <p> phone : {phone}</p>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </Card>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export const Card = styled.div`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40vw;
  margin: 0 auto;
  margin-top: 2rem;
  background: ${props => props.background};
  border-radius: ${props => (props.radius ? '2rem' : '')};
  &:hover {
    box-shadow: 0 8px 20px 0 rgba(222, 222, 222, 0.2);
  }
  /* Add some padding inside the card container */
  .card-body {
    padding: ${props => props.padding};
    h3 {
      border-bottom: ${props => (props.border ? '1px solid #fff' : '')};
      font-size: ${props => props.size};
      text-align: ${props => (props.center ? 'center' : '')};
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
      color: ${mainColurs.tomato};
    }
    .dropIcon {
      cursor: pointer;
      &:hover {
        transition: 0.3s linear;
        color: ${mainColurs.goldenBrown};
      }
    }
  }
`;
