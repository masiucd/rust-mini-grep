import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Dice } from 'styled-icons/fa-solid/Dice';
import { Button } from '../global/buttons';
import Die from './Die';
import { ranDie } from '../../helper';
import { mediaMax, mediaMin } from '../../styles';

export default function DiceRoller() {
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('two');
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    // pick 2 new rolls
    // set state with new rools
    const newDie1 = ranDie;
    const newDie2 = ranDie;
    setDie1(newDie1);
    setDie2(newDie2);
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
    }, 1200);
  };
  return (
    <DiceWrapper>
      <Dice size="70" id="dice-icon" />
      <h1>DiceRoller</h1>
      <div className="diceRollerWrapper">
        <Die die1={die1} rolling={rolling} />
        <Die die2={die2} rolling={rolling} />
      </div>
      <Button colour="#fff" onClick={roll} disabled={rolling}>
        {rolling ? 'Rolling...' : "Let's roll"}
      </Button>
    </DiceWrapper>
  );
}

const DiceWrapper = styled.section`
  height: 100%;
  width: 97%;
  padding: 15em;
  border-radius: 2rem;
  box-shadow: 4px 3px 4px 2px #cecece;
  margin: 0 auto;
  h1 {
    text-align: center;
    ${mediaMax.phone`position:relative; right: 50px;`}
  }
  #dice-icon {
    display: block;
    margin: 0 auto;
  }
  .diceRollerWrapper {
    margin: 0 auto;
    width: 100%;
    /* position: relative; */
    display: flex;
    justify-content: center;
    ${mediaMax.phone``}
  }
  button {
    display: block;
    margin: 0 auto;
    width: 10em;
    font-size: 2.3em;
    cursor: pointer;
  }
`;
