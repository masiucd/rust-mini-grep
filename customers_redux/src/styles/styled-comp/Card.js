import styled from 'styled-components';
import { colours } from '../globalStyles';

export const Card = styled.div`
  max-width: 60%;
  background: ${colours.grey};
  border-radius: 1rem;
  padding: 2rem;
  margin: 1rem auto;
  transition: all 0.3s ease-in-out;
  box-shadow: -17px 26px 22px -19px rgba(0, 0, 0, 0.75);
  .card-header {
    border-bottom: 1px solid ${colours.yellowL};
    position: relative;
    h2 {
      font-size: 2.3rem;
    }
    .arrow-down {
      position: absolute;
      top: -20px;
      right: 4%;
      cursor: pointer;
    }
  }

  .card-body {
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 2px -7px 30px -1px rgba(0, 0, 0, 0.75);
  }
`;
