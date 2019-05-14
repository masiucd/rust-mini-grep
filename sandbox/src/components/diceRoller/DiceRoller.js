import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Dice } from 'styled-icons/fa-solid/Dice';
import { Button } from '../global/buttons';
import Die from './Die';
import { ranDie } from '../../helper';

export default function DiceRoller() {
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('two');

  const roll = () => {
    // pick 2 new rolls
    // set state with new rools
    const newDie1 = ranDie;
    const newDie2 = ranDie;
    setDie1(newDie1);
    setDie2(newDie2);
  };
  return (
    <DiceWrapper>
      <div className="diceRollerWrapper">
        <Dice size="70" />
        <h1>DiceRoller</h1>
        <Die die1={die1} />
        <Die die2={die2} />
        <Button colour="#fff" onClick={roll}>
          {' '}
          Click me{' '}
        </Button>
      </div>
    </DiceWrapper>
  );
}

const DiceWrapper = styled.section`
  height: 100%;
  width: 80%;
  box-shadow: 4px 3px 4px 2px #cecece;
  margin: 0 auto;
  display: flex;
  /* .diceRollerWrapper {
    margin: 0 auto;
  } */
`;
