import styled from 'styled-components';

import { breakpoints } from '../../utils/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

const Column1 = styled.div`
  @media (min-width: ${breakpoints.md}) {
    width: 200px;
    overflow: hidden;
    position: fixed;
    top: 25px;
    left: 20px;
  }
`;

const Column2 = styled.div`
  @media (min-width: ${breakpoints.md}) {
    flex: 0 1 700px;
    margin-left: 200px;
  }
`;

export { Wrapper, Column1, Column2 };
