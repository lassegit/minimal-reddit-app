import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Column1 = styled.div`
  width: 200px;
  overflow: hidden;
  position: fixed;
  top: 25px;
  left: 15px;
`;

const Column2 = styled.div`
  flex: 0 1 700px;
  margin-left: 200px;
`;

export { Wrapper, Column1, Column2 };
