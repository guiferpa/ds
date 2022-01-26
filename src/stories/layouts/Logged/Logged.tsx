import React from 'react';
import styled, { css } from 'styled-components';

import Sidebar from '../../../components/Sidebar';
import { FolderIcon, PersonIcon, LabIcon } from '../../../components/Icon';
import Header from '../../../components/Header';
import UserProfileMenuSection from '../../../components/UserProfileMenuSection';
import UserProfileMenuItem from '../../../components/UserProfileMenuItem';
import Divider from '../../../components/Divider';

import { useWindowDimensions } from '../../../hooks/window';

export interface LoggedProps {}

export interface LoggedContainerProps {
  width?: string;
  height?: string;
}

const StyledLoggedSideContent = styled.div`
  position: relative;
  height: 100%;
  flex-basis: content;
`

const StyledLoggedMainContent = styled.div`
  position: relative;
  flex-basis: 100%;
`

const StyledLoggedContainer = styled.div<LoggedContainerProps>`
  width: ${(props) => props.width || "100vw"};
  height: ${(props) => props.height || "100vh"};
  display: flex;
  overflow: hidden;
`

const Logged: React.FunctionComponent<LoggedProps> = (props) => {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(true);
  const [isMenuFolded, setIsMenuFolded] = React.useState<boolean>(false);

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const user = {
    avatarURL: "",
    name: "Guilherme Paixão",
    role: "Tester",
    renderMenu: () => (
      <>
        <UserProfileMenuSection title="Troca de perfil" items={[
          { label: "Item 1", href: "/#" }
        ]} />
        <Divider />
        <UserProfileMenuSection title="Configurações" items={[
          { label: "Item 2", href: "/#" }
        ]} />
        <UserProfileMenuItem label='Item 3' href='/#' />
      </>
    )
  }

  return (
    <StyledLoggedContainer width={`${windowWidth}px`} height={`${windowHeight}px`}>
      <StyledLoggedSideContent>
        <Sidebar 
          open={isMenuOpened} 
          fold={isMenuFolded}
          items={[
            { icon: FolderIcon, name: "Projetos", href: "/#" },
            { icon: PersonIcon, name: "Perfil de usuário", href: "/#" },
            { icon: LabIcon, name: "Experiências", href: "/#" }
          ]} 
          onClose={() => {
            setIsMenuOpened(false);
          }}
          onFold={() => {
            setIsMenuFolded(!isMenuFolded);
          }}
        />
      </StyledLoggedSideContent>
      <StyledLoggedMainContent>
        <Header 
          user={user} 
          hasMenuOpened={!isMenuOpened} 
          onClickMenu={() => {
            setIsMenuOpened(true);
          }} 
        />
      </StyledLoggedMainContent>
    </StyledLoggedContainer>
  );
}

export default Logged;
