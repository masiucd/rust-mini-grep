import React, { Component } from 'react';
import api from '../../axios';

export default class Deck extends Component {
  state = {
    deck: null,
    drawn: [],
  };

  async componentDidMount() {
    const deck = await api.get('/new/shuffle/');
    this.setState({ deck: deck.data });
    console.log(deck.data);
  }

  getCard = async () => {
    const { deck, drawn } = this.state;
    const id = deck.deck_id;
    try {
      const cardUrl = await api.get(`/${id}/draw/`);
      if (!cardUrl.data.success) {
        throw new Error('No card Remaining!');
      }
      const card = cardUrl.data.cards[0];
      this.setState(prev => ({
        drawn: [
          ...prev.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Card Dealer</h1>
        <button className="get-card" onClick={this.getCard}>
          Get Card
        </button>
      </div>
    );
  }
}
