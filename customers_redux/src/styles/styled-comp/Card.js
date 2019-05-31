import styled from 'styled-components';
import { colours } from '../globalStyles';
import { media } from '../media';
import { fadeIn } from '../animation';

export const Card = styled.div`
  max-width: 75%;
  background: ${colours.grey};
  border-radius: 1rem;
  padding: 3rem 2.4rem;
  animation-name: ${fadeIn};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  margin: 1rem auto;
  transition: all 0.3s ease-in-out;
  box-shadow: -17px 26px 22px -19px rgba(0, 0, 0, 0.75);

  .card-header {
    border-bottom: 1px solid ${colours.yellowL};
    position: relative;
    h2 {
      font-size: 2.3rem;
      border-bottom: 1px solid ${colours.yellowDD};
      padding: 0.4rem;
    }
    .arrow-down {
      position: absolute;
      top: -20px;
      right: 4%;
      cursor: pointer;
    }
  }

  .card-body {
    position: relative;
    display: flex;
    flex-direction: column;
    p {
      font-size: 1.8rem;
      padding: 0.4rem;
    }
    span:nth-child(1) {
      position: absolute;
      top: 0;
      left: 95%;
      ${media.phone` top: 70px; left: 87%;`};
      align-self: flex-end;
    }
    span:nth-child(2) {
      position: absolute;
      top: 0;
      left: 90%;
      ${media.phone` top: 70px; left: 70%;`};
      align-self: flex-end;
    }
    span {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: ${colours.yellowDD};
        transition: all 0.3s ease-in-out;
      }
    }
    a,
    svg {
      text-decoration: none;
      color: ${colours.blueDark};
      &:hover {
        color: ${colours.yellowDD};
        transition: all 0.3s ease-in-out;
      }
    }
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 2px -7px 30px -1px rgba(0, 0, 0, 0.75);
    transform: scale(1.1);
    z-index: 1;
  }
`;
