import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const User = ({ user: { login, avatar_url } }) => {
  let a;
  return (
    <div className="my-5">
      <Card>
        <CardImg
          top
          width="100%"
          src={avatar_url}
          alt={login}
          style={{ width: '13rem' }}
        />

        <CardBody>
          <CardTitle className="user-img">
            <h3>{login}</h3>
          </CardTitle>
          <CardSubtitle>
            Awesome github user named by :{' '}
            <h4 style={{ fontSize: '2rem' }}>{login} </h4>{' '}
          </CardSubtitle>
          <CardText>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
              tenetur! Natus consequuntur fugit veniam dolores hic omnis ad
              asperiores! Harum officia ut itaque sequi, eum id voluptas vero
              obcaecati! Perspiciatis.
            </p>
          </CardText>
          <Link to={`/user/${login}`} className="btn btn-info">
            User Profile
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default User;
