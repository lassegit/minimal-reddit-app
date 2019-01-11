import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Column1 = styled.div`
  flex: 0 1 200px;
  height: 99vh;
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  left: 10px;
`;

const Column2 = styled.div`
  flex: 0 1 700px;
  margin-bottom: 50px;
  min-height: 100vh;
`;

export { Wrapper, Column1, Column2 };
