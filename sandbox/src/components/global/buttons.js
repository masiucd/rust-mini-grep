import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 24px;
  background: ${props =>
    props.background ? 'rgba(200,200,1,0.9)' : 'rgba(55,55,55,0.7)'};
  color: ${props => props.colour};
`;
