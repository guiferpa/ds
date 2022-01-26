import React from 'react';
import styled, { css } from 'styled-components';

export interface UserProfileMenuProps {}

const userProfileMenuResetStyle = () => css``

const userProfileMenuBaseStyle = () => css`
  z-index: 9999;
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${({ theme }) => theme.spacing.size.xs};
  width: 300px;
  min-height: 100px;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  box-shadow: ${({ theme }) => theme.shadow.intensity.one} ${({ theme }) => theme.brand.color.light.medium};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ theme }) => theme.spacing.size.sm};
  box-sizing: border-box;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`

const StyledUserProfileMenu = styled.div(
  userProfileMenuResetStyle,
  userProfileMenuBaseStyle
);

const UserProfileMenu: React.FunctionComponent<UserProfileMenuProps> = (props) => {
  return (
    <StyledUserProfileMenu {...props} >
      {props.children}
    </StyledUserProfileMenu>
  );
}

export default UserProfileMenu;
