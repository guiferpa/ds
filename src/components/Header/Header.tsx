import React from 'react';
import styled, { css } from 'styled-components';
import { Menu } from '@styled-icons/evaicons-solid';

import Avatar from '../Avatar';

export interface HeaderProps {}

const headerResetStyle = () => css`
  padding: 0;
  margin: 0;
`

const headerBaseStyle = () => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  box-shadow: ${({ theme }) => `${theme.shadow.intensity.one} ${theme.brand.color.light.medium}`};
  padding: 0 ${({ theme }) => theme.spacing.size.lg};
`

const StyledHeader = styled.header(
  headerResetStyle,
  headerBaseStyle
);

const StyledHeaderActionsContainer = styled.div``

const StyledMenuIcon = styled(Menu)`
  width: 25px;
  height: 25px;
`

const StyledOpenMenuButton = styled.button`
  border: none;
  background-color: transparent;
  padding: ${({ theme }) => theme.spacing.size.xs};
  border-radius: ${({ theme }) => theme.border.radius.sm};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.brand.color.light.light};
  }
`

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 60px;
  background: red;
`

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing.size.sm};
`

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <StyledHeader>
      <StyledHeaderActionsContainer>
        <StyledOpenMenuButton>
          <StyledMenuIcon />
        </StyledOpenMenuButton>
      </StyledHeaderActionsContainer>
      <StyledProfile>
        <Avatar medium />
        <StyledProfileInfo>
          <span>Guilherme Paixão</span>
          <span>Testing</span>
        </StyledProfileInfo>
      </StyledProfile>
    </StyledHeader>
  );
}

export default Header;
