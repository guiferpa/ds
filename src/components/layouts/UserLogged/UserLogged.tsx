import React from 'react';
import styled from 'styled-components';

import Sidebar, { ItemProps as SidebarItemProps } from '../../Sidebar/Sidebar';
import Header from '../../Header';
import Container from '../Container';

import { useWindowDimensions } from '../../../hooks/window';

export interface User {
  avatarURL: string;
  name: string;
  role: string;
}

export interface SidebarOptions {
  isOpened: boolean;
  isFolded: boolean;
  items: SidebarItemProps[];

  onToggle?: () => void;
  onFold?: () => void;
}

export interface LoggedProps {
  header: {
    profile: {
      user: User;
      hasNotification?: boolean;
      menu: () => React.ReactNode;
    }
  };
  sidebar: SidebarOptions;
}

export interface LoggedContainerProps {
  width?: number;
  height?: number;
}

const StyledLoggedHeader = styled.div`
  position: relative;
  flex-basis: content;
  width: 100%;
`

const StyledLoggedBody = styled.div`
  position: relative;
  width: 100%;
  flex-basis: 100%;
  box-sizing: border-box;
  overflow: auto;
`

const StyledLoggedBodyContent = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.spacing.inset.lg};
  overflow: auto;
  box-sizing: border-box;

  @media screen and (max-width: 425px) {
    margin: ${({ theme }) => theme.spacing.inset.sm};
  }
`

const StyledLoggedContainer = styled.div<LoggedContainerProps>`
  width: ${(props) => props.width ? `${props.width}px` : "100vw"};
  height: ${(props) => props.height ? `${props.height}px` : "100vh"};
  display: flex;
  flex-direction: column;
`

const Logged: React.FunctionComponent<LoggedProps> = (props) => {
  const { 
    isOpened: isMenuOpened, 
    isFolded: isMenuFolded,
    items,

    onFold, onToggle
  } = props.sidebar;

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return (
    <StyledLoggedContainer width={windowWidth} height={windowHeight}>
      <StyledLoggedHeader>
        <Header
          user={{
            ...props.header.profile.user,
            renderMenu: props.header.profile.menu
          }}
          hasNotification={props.header.profile.hasNotification}
          hasMenuOpened={!isMenuOpened}
          onClickMenu={() => onToggle && onToggle()}
        />
      </StyledLoggedHeader>
      <StyledLoggedBody>
        <Sidebar 
          open={isMenuOpened}
          fold={isMenuFolded}
          items={items} 
          onFold={() => onFold && onFold()}
        />
        <Container>
          <StyledLoggedBodyContent>
            {props.children}
          </StyledLoggedBodyContent>
        </Container>
      </StyledLoggedBody>
    </StyledLoggedContainer>
  );
}

export default Logged;
