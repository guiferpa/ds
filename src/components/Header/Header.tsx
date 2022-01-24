import React from 'react';
import styled, { css } from 'styled-components';

export interface HeaderProps {}

const headerResetStyle = () => css`
  padding: 0;
  margin: 0;
`

const headerBaseStyle = () => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  box-shadow: ${({ theme }) => `${theme.shadow.intensity.one} ${theme.brand.color.light.medium}`};
`

const StyledHeader = styled.header(
  headerResetStyle,
  headerBaseStyle
);

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <StyledHeader>

    </StyledHeader>
  );
}

export default Header;
