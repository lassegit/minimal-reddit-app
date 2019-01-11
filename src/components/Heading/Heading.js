import styled from 'styled-components';

const baseStyles = `
  color: #f2f2f2;
  margin: 0 0 10px 0;
  line-height: 1.2;
  font-weight: 200;
`;

const H1 = styled.h1`
  ${baseStyles}
  font-size: 2.5rem;
`;

const H2 = styled.h2`
  ${baseStyles}
  font-size: 2rem;
`;

const H3 = styled.h3`
  ${baseStyles}
  font-size: 1.7rem;
`;

export { H1, H2, H3 };
