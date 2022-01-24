import React from 'react';
import styled, { css } from 'styled-components';

import logo from './Logo.svg';

export interface LogoProps {}

const logoWrapperResetStyle = () => css``

const logoWrapperBaseStyle = () => css``

const StyledLogoWrapper = styled.div(
  logoWrapperResetStyle,
  logoWrapperBaseStyle
);

const StyledLogoImage = styled.img`
  width: 100px;
`

const Logo: React.FunctionComponent<LogoProps> = (props) => {
  return (
    <StyledLogoWrapper>
      <StyledLogoImage src={logo} />
    </StyledLogoWrapper>
  );
}

export default Logo;
