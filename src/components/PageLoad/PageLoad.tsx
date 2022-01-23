import React from 'react';
import styled, { css } from 'styled-components';
import { SpinnerIcon } from '../Icon';

export interface PageLoadProps {
  isVisible?: boolean;
}

const containerPageLoadResetStyle = () => css`
  margin: 0;
  padding: 0;
`

const containerPageLoadBaseStyle = () => css`
  display: none;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const containerPageLoadIsVisibleStyle = (props: PageLoadProps) => props.isVisible && css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledContainerPageLoad = styled.div<PageLoadProps>(
  containerPageLoadResetStyle,
  containerPageLoadBaseStyle,
  containerPageLoadIsVisibleStyle
);

const pageLoadResetStyle = () => css`
  border: none;
  margin: 0;
`

const pageLoadBaseStyle = () => css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.brand.color.light.light};
  opacity: ${({ theme }) => theme.opacity.intensity.four};
`

const StyledPageLoad = styled.div(
  pageLoadResetStyle,
  pageLoadBaseStyle
);

const StyledSpinnerIconPageLoad = styled(SpinnerIcon)`
  display: block;
  color: ${({ theme }) => theme.brand.color.primary.pure};
  width: 150px;
  height: 150px;
`

const PageLoad: React.FunctionComponent<PageLoadProps> = (props) => {
  return (
    <StyledContainerPageLoad {...props}>
      <StyledPageLoad />
      <StyledSpinnerIconPageLoad ease />
    </StyledContainerPageLoad>
  );
}

export default PageLoad;
