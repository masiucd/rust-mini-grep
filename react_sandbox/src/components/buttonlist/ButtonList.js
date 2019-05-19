import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '../global/buttons';

export default class ButtonList extends Component {
  static defaultProps = {
    colours: ['tomato', 'slateblue', 'steelblue', 'yellow', 'green'],
  };

  constructor(props) {
    super(props);
    this.state = {
      colour: 'rgba(66,55,432,.8)',
    };
  }

  changeColour(newColour) {
    this.setState({ colour: newColour });
  }

  render() {
    return (
      <Wrapper style={{ backgroundColor: this.state.colour }}>
        {this.props.colours.map(c => {
          const cObj = { backgroundColor: c };
          return (
            <Button style={cObj} onClick={this.changeColour.bind(this, c)}>
              Click me
            </Button>
          );
        })}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100%;
  width: 97%;
  padding: 15em;
  border-radius: 2rem;
  box-shadow: 4px 3px 4px 2px #cecece;
  margin: 0 auto;
  display: flex;
  justify-content: center;

`;
