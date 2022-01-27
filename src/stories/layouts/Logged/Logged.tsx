import React from 'react';
import styled from 'styled-components';

import Sidebar from '../../../components/Sidebar';
import { FolderIcon, PersonIcon, LabIcon } from '../../../components/Icon';
import Header from '../../../components/Header';
import UserProfileMenuSection from '../../../components/UserProfileMenuSection';
import UserProfileMenuItem from '../../../components/UserProfileMenuItem';
import Divider from '../../../components/Divider';

import { useWindowDimensions } from '../../../hooks/window';

export interface User {
  avatarURL: string;
  name: string;
  role: string;
}

export interface SidebarOptions {
  isOpened: boolean;
  isFolded: boolean;

  onToggle?: () => void;
  onFold?: () => void;
}

export interface LoggedProps {
  header: {
    profile: {
      user: User;
      menu: () => React.ReactNode;
    }
  };
  sidebar: SidebarOptions;
}

export interface LoggedContainerProps {
  width?: string;
  height?: string;
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
`

const StyledLoggedBodyContent = styled.div`
  position: relative;
  width: 100%:
  height: 100%;
  margin: ${({ theme }) => theme.spacing.inset.lg};

  @media screen and (max-width: 425px) {
    margin: ${({ theme }) => theme.spacing.inset.sm};
  }
`

const StyledLoggedContainer = styled.div<LoggedContainerProps>`
  width: ${(props) => props.width || "100vw"};
  height: ${(props) => props.height || "100vh"};
  display: flex;
  flex-direction: column;
`

const Logged: React.FunctionComponent<LoggedProps> = (props) => {
  const { 
    isOpened: isMenuOpened, 
    isFolded: isMenuFolded,

    onFold, onToggle
  } = props.sidebar;

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return (
    <StyledLoggedContainer width={`${windowWidth}px`} height={`${windowHeight}px`}>
      <StyledLoggedHeader>
        <Header
          user={{
            ...props.header.profile.user,
            renderMenu: props.header.profile.menu
          }}
          hasMenuOpened={!isMenuOpened}
          onClickMenu={() => onToggle && onToggle()}
        />
      </StyledLoggedHeader>
      <StyledLoggedBody>
        <Sidebar 
          open={isMenuOpened}
          fold={isMenuFolded}
          items={[
            { icon: FolderIcon, name: "Projetos", href: "/#" },
            { icon: PersonIcon, name: "Perfil de usuário", href: "/#" },
            { icon: LabIcon, name: "Experiências", href: "/#" }
          ]} 
          onFold={() => onFold && onFold()}
        />
        <StyledLoggedBodyContent>
          {props.children}
        </StyledLoggedBodyContent>
      </StyledLoggedBody>
    </StyledLoggedContainer>
  );
}

export default Logged;
