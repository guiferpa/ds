import React from 'react';
import styled, { css } from 'styled-components';
import { ChevronSmallDown, ChevronSmallUp } from '@styled-icons/entypo';

import Avatar from '../Avatar';

export interface UserProfileProps {
  avatarURL: string;
  name: string;
  role: string;
  renderMenu?: () => React.ReactNode;
}

const userProfileContainerResetStyle = () => css``

const userProfileContainerBaseStyle = () => css`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.size.xs};
  flex-basis: content;
  height: 60px;
  justify-content: flex-end;

  @media screen and (max-width: 425px) {
    flex-basis: 100%;
  }
`

const StyledUserProfileContainer = styled.div(
  userProfileContainerResetStyle,
  userProfileContainerBaseStyle
);

const userProfileInfoResetStyle = () => css``

const userProfileInfoBaseStyle = () => css`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    display: none;
  }
`

const StyledUserProfileInfo = styled.div(
  userProfileInfoResetStyle,
  userProfileInfoBaseStyle
);

const StyledUserProfileInfoName = styled.span({});

const userProfileInfoRoleResetStyle = () => css``

const userProfileInfoRoleBaseStyle = () => css`
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.brand.color.light.dark};
`

const StyledUserProfileInfoRole = styled.span(
  userProfileInfoRoleResetStyle,
  userProfileInfoRoleBaseStyle
);

const userProfileMenuButtonResetStyle = () => css`
  border: none;
  background-color: transparent;
`

const userProfileMenuButtonBaseStyle = () => css`
  padding: ${({ theme }) => theme.spacing.size.xs};
  border-radius: ${({ theme }) => theme.border.radius.sm};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.brand.color.light.light};
  }
`

const StyledUserProfileMenuButton = styled.button(
  userProfileMenuButtonResetStyle,
  userProfileMenuButtonBaseStyle
);

const userProfileMenuIconStyle = () => css`
  width: 25px;
  height: 25px;
`

const StyledUserProfileUpMenuIcon = styled(ChevronSmallUp)(
  userProfileMenuIconStyle
);

const StyledUserProfileDownMenuIcon = styled(ChevronSmallDown)(
  userProfileMenuIconStyle
);

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

const UserProfile: React.FunctionComponent<UserProfileProps> = (props) => {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);

  return (
    <StyledUserProfileContainer>
      <Avatar src={props.avatarURL} />
      <StyledUserProfileInfo>
        <StyledUserProfileInfoName>
          {props.name}
        </StyledUserProfileInfoName>
        <StyledUserProfileInfoRole>
          {props.role}
        </StyledUserProfileInfoRole>
      </StyledUserProfileInfo>
      {props.renderMenu && <StyledUserProfileMenuButton onClick={() => setIsMenuOpened(!isMenuOpened)}>
        {isMenuOpened ? (
          <StyledUserProfileUpMenuIcon />
          ) : (
          <StyledUserProfileDownMenuIcon />
        )}
      </StyledUserProfileMenuButton>}
      {(props.renderMenu && isMenuOpened) && (
        <StyledUserProfileMenu>
          {props.renderMenu()}
        </StyledUserProfileMenu>
      )}
    </StyledUserProfileContainer>
  );
}

export default UserProfile;
