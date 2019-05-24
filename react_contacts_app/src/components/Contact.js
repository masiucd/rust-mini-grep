import React from 'react';
import styled from 'styled-components';
import { DownArrowAlt } from 'styled-icons/boxicons-regular/DownArrowAlt';
import { Delete } from 'styled-icons/typicons/Delete';
import PropTypes from 'prop-types';

export default function Contact({ contact, toggleOn, on, deleteClickHandler }) {
  const onDropDown = id => {
    toggleOn();
  };
  const onDeleteClick = () => {
    deleteClickHandler(contact.id);
  };

  return (
    <div>
      <Card>
        <div className="card-body">
          {' '}
          <DownArrowAlt onClick={onDropDown} size="35" />{' '}
          <span onClick={onDeleteClick}>
            <Delete size={35} style={{ float: 'right', color: 'tomato' }} />
          </span>
          {on ? (
            <>
              {' '}
              <h3> name: {contact.name} </h3> <p>email : {contact.email}</p>{' '}
              <p> phone : {contact.phone}</p>
            </>
          ) : (
            ''
          )}
        </div>
      </Card>
    </div>
  );
}

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40vw;
  margin: 0 auto;
  margin-top: 2rem;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Add some padding inside the card container */
  .card-body {
    padding: 2px 16px;
    h3 {
      border-bottom: 1px solid #000;
      font-size: 1.6rem;
    }
    p {
      font-size: 1.3rem;
    }
    h3,
    p {
      margin: 0.3rem 0;
    }
  }
`;

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
