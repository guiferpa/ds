import React from 'react';
import styled, { css } from 'styled-components';
import { Menu } from '@styled-icons/evaicons-solid';
import { ChevronSmallDown } from '@styled-icons/entypo';

import UserProfile from '../UserProfile';

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

  @media screen and (max-width: 415px) {
    padding: 0 ${({ theme }) => theme.spacing.size.sm};
  }
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

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <StyledHeader>
      <StyledHeaderActionsContainer>
        <StyledOpenMenuButton>
          <StyledMenuIcon />
        </StyledOpenMenuButton>
      </StyledHeaderActionsContainer>
      <UserProfile 
        avatarURL="" 
        name="Guilherme Paixão" 
        role="Tester" 
        renderMenu={() => (
          <span>Header Component fdsfd sdf</span>
        )}
      />
    </StyledHeader>
  );
}

export default Header;
