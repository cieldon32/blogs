import { Space, Col } from 'antd';
import styled from 'styled-components';

export const DD = styled.dd`
  width: 292px;
  font-size: 14px;
  font-weight: 300;
  line-height: 30px;
  color: var(--safe-text-color-secondary);
`

export const DL = styled.dl`
  border-bottom: 1px solid var(--safe-border-color-base);
  cursor: pointer;
`

export const DT = styled.dt`
height: 30px;
font-size: 22px;
font-weight: 400;
line-height: 30px;
.icon{
  margin-right: 10px;
}

`

export const Item = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;

.icon{
  margin-right: 10px;
}

.more, .ant-image{
  margin-right: 0;
  margin-left: auto;
}
`

export const US = styled(Col)`
padding: 30px;
background: var(--safe-alert-info-bg-color);
border-radius: 10px;
`