 import styled from "styled-components";

const Col = styled.div`
  width: 20%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  > div {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`
export default Col;