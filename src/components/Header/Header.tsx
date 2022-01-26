import React from 'react';
import styled, { css } from 'styled-components';
import { Menu, Close } from '@styled-icons/evaicons-solid';

import UserProfile, { UserProfileProps } from '../UserProfile/UserProfile';

export interface HeaderProps {
  user: UserProfileProps;
  hasMenuOpened: boolean;

  onClickMenu?: () => void;
}

const headerResetStyle = () => css`
  padding: 0;
  margin: 0;
`

const headerBaseStyle = () => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  padding: 0 ${({ theme }) => theme.spacing.size.lg};

  @media screen and (max-width: 768px) {

  }

  @media screen and (max-width: 415px) {
    padding: 0 ${({ theme }) => theme.spacing.size.sm};
  }
`

const StyledHeader = styled.header(
  headerResetStyle,
  headerBaseStyle
);

const StyledHeaderActionsContainer = styled.div``

const StyledMenuIconClose = styled(Close)`
  width: 25px;
  height: 25px;
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
  const { hasMenuOpened } = props;

  return (
    <StyledHeader>
      <StyledHeaderActionsContainer>
        <StyledOpenMenuButton onClick={() => {
          props.onClickMenu && props.onClickMenu();
        }}>
          <StyledMenuIconOpen />
        </StyledOpenMenuButton>
      </StyledHeaderActionsContainer>
      <UserProfile {...props.user} />
    </StyledHeader>
  );
}

export default Header;
