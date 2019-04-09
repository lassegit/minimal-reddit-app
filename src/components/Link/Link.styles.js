import styled, { css } from 'styled-components';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';

const defaultStyles = css`
  color: ${({ theme }) => theme.link.main};
  text-decoration: none;
  &:visited {
    color: ${({ theme }) => theme.link.visited};
  }

  &:hover {
    text-decoration: underline;
  }

  ${({ large }) =>
    large &&
    css`
      font-size: 18px;
    `}
`;

const NavLinkStyled = styled(RouterNavLink)`
  ${defaultStyles}
`;

const LinkStyled = styled(RouterLink)`
  ${defaultStyles}
`;

const AStyled = styled.a`
  ${defaultStyles}
`;

export { LinkStyled, NavLinkStyled, AStyled };
