import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Folder } from '@styled-icons/fa-solid';
import { LabFlask } from '@styled-icons/entypo';
import { Person } from '@styled-icons/material';

import { MenuFold, MenuUnfold } from '@styled-icons/remix-line';

export interface SidebarProps {
  open?: boolean;
}

const sidebarResetStyle = () => css``

const sidebarBaseStyle = (props: SidebarProps) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: ${ props.open ? "290px" : "90px" };
  height: 100%;
  transition: width 1s;
  background-color: ${({ theme }) => theme.brand.color.primary.pure};
  box-shadow: 
`

const StyledSidebar = styled.nav(
  sidebarResetStyle,
  sidebarBaseStyle
);

const StyledSidebarHeader = styled.header`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.inset.sm};
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  width: 100%;
  box-sizing: border-box;
`

const StyledSidebarNavigator = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0 ${({ theme }) => theme.spacing.inset.sm};
  margin-top: ${({ theme }) => theme.spacing.size.md};
`
  
const StyledSidebarNavigatorItem = styled.li`
  position: relative;
  height: 50px;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.size.sm} 0;
`
  
const StyledSidebarNavigatorItemLink = styled.a`
  color: ${({ theme }) => theme.brand.color.light.pure};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  display: flex;
  align-items: center;
  text-decoration: none;
  line-height: 50px;
  padding: ${({ theme }) => `${theme.spacing.inset.xxs};`}
  font-size: ${({ theme }) => theme.typography.size.md};

  &:hover {
    color: ${({ theme }) => theme.brand.color.secondary.pure};
    background-color: ${({ theme }) => theme.brand.color.primary.dark};
  }
`

const sidebarNavigatorItemIconStyle = () => css`
  width: 25px;
`

const StyledFolderIcon = styled(Folder)(sidebarNavigatorItemIconStyle);

const StyledUserProfileIcon = styled(Person)(sidebarNavigatorItemIconStyle);

const StyledExperienceIcon = styled(LabFlask)(sidebarNavigatorItemIconStyle);

const StyledNavigatorItemIconWrapper = styled.div`
  text-align: center;
  width: 50px;
`

const StyledIconToggleMenu = styled.div`
  position: relative;
  text-align: center;
  width: 50px;
`

const iconToggleMenuStyle = () => css`
  color: ${({ theme }) => theme.brand.color.primary.dark};
  padding: ${({ theme }) => theme.spacing.inset.xs};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  width: 20px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.brand.color.light.light};
  }
`

const StyledIconFoldMenu = styled(MenuFold)(iconToggleMenuStyle);

const StyledIconUnfoldMenu = styled(MenuUnfold)(iconToggleMenuStyle);

const StyledSidebarNavigatorItemLinkName = styled.span``

const Sidebar: React.FunctionComponent<SidebarProps> = (props) => {
  const [isOpened, setIsOpened] = React.useState<boolean | undefined>(props.open);

  return (
    <StyledSidebar open={isOpened}>
      <StyledSidebarHeader>
        {isOpened && <div>Cieds Core</div>}
        <StyledIconToggleMenu onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? (
            <StyledIconFoldMenu />
          ) : (
            <StyledIconUnfoldMenu />
          )}
        </StyledIconToggleMenu>
      </StyledSidebarHeader>
      <StyledSidebarNavigator>
        {[
          { icon: StyledFolderIcon, name: "Projetos" },
          { icon: StyledUserProfileIcon, name: "Perfil de usuário" },
          { icon: StyledExperienceIcon, name: "Experiências" }
        ].map(({ icon: Icon, name }) => {
          return (
            <StyledSidebarNavigatorItem>
              <StyledSidebarNavigatorItemLink href='/#'>
                <StyledNavigatorItemIconWrapper>
                  <Icon /> 
                </StyledNavigatorItemIconWrapper>
                {isOpened && <StyledSidebarNavigatorItemLinkName>
                  {name}
                </StyledSidebarNavigatorItemLinkName>}
              </StyledSidebarNavigatorItemLink>
            </StyledSidebarNavigatorItem>
          );
        })}
      </StyledSidebarNavigator>
    </StyledSidebar>
  );
}

export default Sidebar;
