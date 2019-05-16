import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '../global/buttons';
import { options } from '../../helper';

export default class IconList extends Component {
  state = {
    icons: ['bone'],
  };

  addIcon = () => {
    const idx = Math.floor(Math.random() * options.length);
    const a = options[idx];
    this.setState({ icons: [...this.state.icons, a] });
  };

  render() {
    const { icons } = this.state;
    // const i = icons.map(i => <i className={`fas fa-${i}`} />);
    const i = icons.map((i, index) => (
      <i key={index} className={`iconicon fas fa-${i}`} />
    ));
    return (
      <IconWrapper>
        <h3>Icon List</h3>
        {i}
        <Button onClick={this.addIcon}>Add new icon</Button>
      </IconWrapper>
    );
  }
}

const IconWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  box-shadow: 2px 3px 2px 2px #c3c3c3;
  padding: 5em;
  text-align: center;
  .iconicon {
    font-size: 10em;
  }
  button {
    display: block;
    margin: 0 auto;
    margin-top: 2em;
  }
`;
