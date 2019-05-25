import styled from 'styled-components';

export const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`;

export const Col = styled.div`
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
`;

export const Col1 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 8.3333333333%;
  flex: 0 0 8.3333333333%;
  max-width: 8.3333333333%;
`;
export const Col2 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 16.6666666667%;
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
`;

export const Col3 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
`;
export const Col4 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.3333333333%;
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
`;
export const Col5 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 41.6666666667%;
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%;
`;
export const Col6 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
`;
export const Col7 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 58.3333333333%;
  flex: 0 0 58.3333333333%;
  max-width: 58.3333333333%;
`;
export const Col8 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 66.6666666667%;
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;
`;
export const Col9 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
`;
export const Col10 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 83.3333333333%;
  flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%;
`;
export const Col11 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 91.6666666667%;
  flex: 0 0 91.6666666667%;
  max-width: 91.6666666667%;
`;
export const Col12 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;
