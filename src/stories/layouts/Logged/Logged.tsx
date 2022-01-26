import React from 'react';
import styled, { css } from 'styled-components';

import Sidebar from '../../../components/Sidebar';
import { FolderIcon, PersonIcon, LabIcon } from '../../../components/Icon';
import Header from '../../../components/Header';
import UserProfileMenuSection from '../../../components/UserProfileMenuSection';
import UserProfileMenuItem from '../../../components/UserProfileMenuItem';
import Divider from '../../../components/Divider';

export interface LoggedProps {}

const StyledLoggedContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const StyledLoggedContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Logged: React.FunctionComponent<LoggedProps> = (props) => {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(true);

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

  console.log("isMenuOpened", isMenuOpened);

  return (
    <StyledLoggedContainer>
      <Sidebar 
        open={isMenuOpened} 
        items={[
          { icon: FolderIcon, name: "Projetos", href: "/#" },
          { icon: PersonIcon, name: "Perfil de usuário", href: "/#" },
          { icon: LabIcon, name: "Experiências", href: "/#" }
        ]} 
        onClose={() => {
          setIsMenuOpened(false);
        }}
      />
      <StyledLoggedContent>
        <Header 
          user={user} 
          hasMenuOpened={!isMenuOpened} 
          onClickToggleMenu={() => {
            setIsMenuOpened(!isMenuOpened);
          }} 
        />
      </StyledLoggedContent>
    </StyledLoggedContainer>
  );
}

export default Logged;
