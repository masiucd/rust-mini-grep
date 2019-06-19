import React, { useState, useEffect } from 'react';
import api from '../api';
import Card from './Card';
import './deck.css';
import { FaHeart } from 'react-icons/fa';

export default function Deck() {
  const [deck, setDeck] = useState(null);
  const [draw, setDraw] = useState([]);

  useEffect(() => {
    const fetchCard = async () => {
      const cardUrl = await api.get('/new/shuffle/');
      setDeck(cardUrl.data);
      console.log(cardUrl.data);
    };
    fetchCard();
  }, []);

  const getCards = async () => {
    const cardId = deck.deck_id;
    try {
      const cardApi = await api.get(`/${cardId}/draw/`);
      if (!cardApi.data.success) {
        throw new Error('No card remaining!');
      }
      const card = cardApi.data.cards[0];
      setDraw([
        ...draw,
        {
          id: card.code,
          image: card.image,
          name: `${card.value} of ${card.suit}`
        }
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="deck">
      <h1>
        {' '}
        <span>
          <FaHeart />{' '}
        </span>{' '}
        card dealer with hooks{' '}
        <span>
          <FaHeart />{' '}
        </span>{' '}
      </h1>
      <button className="hit-btn" onClick={getCards}>
        get card
      </button>
      {draw.map(c => (
        <Card key={c.id} image={c.image} name={c.name} />
      ))}
    </div>
  );
}
