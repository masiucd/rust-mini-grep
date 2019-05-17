import styled, { keyframes } from 'styled-components';

export const Button = styled.button``;

export const moveLeft = keyframes`

0%{
  opacity: 0;
  transfrom: translateX(-100px);
  margin-left: -100px;
}

80%{
  transfrom: translateX(20px);
  margin-left: 20px;
}

100%{
  opacity: 1;
  transfrom: translate(0);
}
`;

export const moveRight = keyframes`

0%{
  opacity: 0;
  transfrom: translateX(200px);
  margin-right: -100px;
}

80%{
  transfrom: translateX(20px);
  margin-right: 20px;
}

100%{
  opacity: 1;
  transfrom: translate(0);
}
`;
export const bottomUpp = keyframes`

0%{
  opacity: 0;
  transfrom: translateY(30px);
  margin-bottom: 200px;
}



100%{
  opacity: 1;
  transfrom: translate(0);
}
`;
