import styled from 'styled-components';


const Panel: React.FC<any> = styled.div`
  width: 100%;
  padding: 80px 0;
  background-color: ${props => props.color || '#fff'};
  overflow: hidden;
`

export default Panel