import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    const angel = Math.random() * 90 - 45;
    const xPos = Math.random() * 40 - 20;
    const yPos = Math.random() * 40 - 20;
    this.transform = `translate(${xPos}px,${yPos}px) rotate(${angel}deg)`;
  }

  render() {
    const { image, name } = this.props;
    return (
      <>
        <img
          className="card"
          style={{ transform: this.transform }}
          src={image}
          alt={name}
        />
      </>
    );
  }
}
