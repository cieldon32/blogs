import styled from 'styled-components';

export const Title = styled.div`
  height: 50px;
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  margin-bottom: 38px;
  &::after{
    content: '.';
  }
`;

export const Context = styled.div`
  width: var(--safe-screen-xl);
  margin: 0 auto;
  overflow: hidden;
`

export const DocContext = styled.div`
  width: var(--ifm-container-width);
  margin: 0 auto;
  overflow: hidden;
`

export const SubTitle = styled.div`
  height: 34px;
  font-size: 28px;
  font-weight: 400;
  line-height: 34px;
  margin-bottom: 20px;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
