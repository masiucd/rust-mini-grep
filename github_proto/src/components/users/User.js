import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

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
          <CardTitle>{login}</CardTitle>
          <CardSubtitle>Awesome github user named by : {login}</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default User;
