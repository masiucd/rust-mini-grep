import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 24px;
  font-size: ${props => (props.fontS ? '2.4em' : '3em')}
  background: ${props =>
    props.background ? 'rgba(200,200,1,0.9)' : 'rgba(55,55,55,0.7)'};
  color: ${props => props.colour};
  &:hover {
    transition: 0.7s ease-in-out;
    background: ${props =>
      props.hoverBg ? 'rgba(55,55,55,0.7)' : 'rgba(100,20,111,0.6)'};
  }
`;
