import styled from 'styled-components';
import { colours } from '../globalStyles';

export const BtnPrimary = styled.button`
  padding: ${props => (props.padding ? '.6rem 9rem;' : ' 1rem .7rem')};
  background: linear-gradient(
    80deg,
    ${colours.blueDark} 0%,
    ${colours.yellowL} 50%,
    ${colours.blueDark} 50%,
    ${colours.blueDark} 50%,
    ${colours.yellowDD} 100%
  );
  border-radius: 0.7rem;
  transition: all 0.3s ease-in-out;
  color: #fff;
  border: none;
  font-size: 1.3rem;
  font-weight: 800;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.45);
  width: ${props => (props.W ? '60%' : '50%')};
  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 6px 3px 3px rgba(0, 0, 0, 0.45);
  }
`;

export const FormBtn = styled(BtnPrimary)`
  background: ${colours.blueDark};
  width: 40%;
  display: block;
  margin: 2rem auto;
`;
