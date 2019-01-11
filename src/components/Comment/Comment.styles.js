import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  margin: 15px 0;
  padding: 15px 0;
  border-bottom: 1px dashed #ddd;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin: -10px 0 5px 0;
  font-size: 12px;
`;

const Li = styled.li`
  margin-right: 10px;
`;

export { Wrapper, Ul, Li };
