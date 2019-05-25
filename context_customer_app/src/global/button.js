import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.background};
  border-radius: 1rem;
  padding: 0.6rem 0.9rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 1.6;
  color: ${props => props.colour};
  transition: 0.3s;

  &:hover {
    transition: 0.3s linear;
    background: ${props => props.hoverBG};
    color: ${props => props.hoverCL};
  }
`;
