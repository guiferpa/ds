import React from 'react';
import styled, { css } from 'styled-components';
import { Menu, Close } from '@styled-icons/evaicons-solid';

import UserProfile, { UserProfileProps } from '../UserProfile/UserProfile';

import { Container } from '../layouts';

import Logo from '../Logo';

export interface HeaderProps {
  user: UserProfileProps;
  hasMenuOpened: boolean;
  hasNotification?: boolean;

  onClickMenu?: () => void;
}

const StyledHeaderContainer = styled.header`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
`;

const headerResetStyle = () => css`
  padding: 0;
  margin: 0;
`

const headerBaseStyle = () => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.spacing.size.lg};

  @media screen and (max-width: 415px) {
    padding: 0 ${({ theme }) => theme.spacing.size.sm};
  }
`

const StyledHeader = styled.div(
  headerResetStyle,
  headerBaseStyle
);

const StyledHeaderActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.size.md};
`

const StyledMenuIconOpen = styled(Menu)`
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
    <StyledHeaderContainer>
      <Container>
        <StyledHeader>
            <StyledHeaderActionsContainer>
              <Logo />
              <StyledOpenMenuButton onClick={() => {
                props.onClickMenu && props.onClickMenu();
              }}>
                <StyledMenuIconOpen />
              </StyledOpenMenuButton>
            </StyledHeaderActionsContainer>
            <UserProfile {...props.user} hasNotification={props.hasNotification} />
        </StyledHeader>
      </Container>
    </StyledHeaderContainer>
  );
}

export default Header;
