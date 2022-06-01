 import styled from "styled-components";
 import Link from '@docusaurus/Link';


export const LinkStyle = styled(Link)`
  margin: 10px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid #00A6FB;
  width: 30%;
  display: block;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 22px;
  color: var(--safe-text-color);
  padding: 20px;
  span{
    margin-left: 10px;
  }
`
