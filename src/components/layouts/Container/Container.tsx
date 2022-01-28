import React from 'react';
import styled, { css } from 'styled-components';

export interface ContainerProps {}

const containerResetStyle = () => css`
  border: none;
`

const containerBaseStyle = () => css`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`

const StyledContainer = styled.div(
  containerResetStyle,
  containerBaseStyle
);

const Heading: React.FunctionComponent<ContainerProps> = (props) => {
  return (
    <StyledContainer {...props} >
      {props.children}
    </StyledContainer>
  );
}

export default Heading;
