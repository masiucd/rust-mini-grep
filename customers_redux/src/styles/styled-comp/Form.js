import styled from 'styled-components';
import { colours } from '../globalStyles';
import { shake } from '../animation';

export const Form = styled.form`
  border: none;
  padding: 2rem;
  height: 100%;
  background: rgba(228, 233, 237, 1);
  width: 60%;
  margin: 0 auto;
  color: ${colours.blueDark};
  border-radius: 0.4rem;
  margin-top: 10rem;
  box-shadow: 0.3rem 0.2rem 0.3rem 0.2rem rgba(0, 0, 0, 0.35);
  &:hover {
    transition: 0.2s ease-in-out;
    box-shadow: 0.3rem 0.6rem 0.8rem 0.9rem rgba(0, 0, 0, 0.35);
  }
  label {
    font-size: 2.2rem;
    display: block;
    margin: 0.9rem;
  }
  input {
    width: 100%;
    padding: 1rem 1.3rem;
    border: none;
    border-radius: 0.6rem;
    font-size: 2rem;
    display: block;
    margin: 0.9rem;
  }

  .display-error {
    border: 5px solid tomato;
    background: rgba(250, 50, 150, 0.5);
  }

  .shake {
    animation-name: ${shake};
    animation-duration: 1.2s;
  }
`;
