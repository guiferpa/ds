import React from 'react';
import styled, { css } from 'styled-components';
import { MenuFold, MenuUnfold } from '@styled-icons/remix-line';
import { Close } from '@styled-icons/evaicons-solid';

import Logo from '../Logo';

export interface Item {
  icon: React.ComponentType<any>;
  name: string;
  href?: string;
}

export interface SidebarProps {
  open?: boolean;
  items: Item[];
}

const sidebarResetStyle = () => css``

const sidebarBaseStyle = (props: { isFolded: boolean; isOpened: boolean; }) => css`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: ${ props.isOpened ? (!props.isFolded ? "290px" : "90px") : "0px" };
  height: 100%;
  transition: width 1s;
  background-color: ${({ theme }) => theme.brand.color.primary.pure};
`

const StyledSidebar = styled.nav(
  sidebarResetStyle,
  sidebarBaseStyle
);

const StyledSidebarHeader = styled.header<{ isOpened: boolean; isFolded: boolean; }>`
  position: relative;
  display: flex;
  height: 80px;
  align-items: center;
  ${({ isFolded }) => !isFolded 
    ? css`
      justify-content: space-between;
  `
    : css`
      justify-content: space-around;
  `}
  ${({ isOpened }) => isOpened && css`padding: 0 ${({ theme }) => theme.spacing.inset.sm}`};
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  width: 100%;
  box-sizing: border-box;
`

const StyledSidebarNavigator = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0 ${({ theme }) => theme.spacing.inset.sm};
  margin: ${({ theme }) => theme.spacing.size.md} 0;
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
  transition: color .8s;

  &:hover {
    color: ${({ theme }) => theme.brand.color.secondary.pure};
    background-color: ${({ theme }) => theme.brand.color.primary.dark};
  }
`

const StyledNavigatorItemIconWrapper = styled.div`
  text-align: center;
  width: 50px;
`

const StyledIconToggleMenu = styled.div`
  position: relative;
  text-align: center;
`

const StyledCloseMenuIcon = styled(Close)`
  color: ${({ theme }) => theme.brand.color.primary.dark};
  padding: ${({ theme }) => theme.spacing.inset.xs};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  width: 20px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.brand.color.light.light};
  }
`

const iconToggleMenuStyle = () => css`
  color: ${({ theme }) => theme.brand.color.light.pure};
  padding: ${({ theme }) => theme.spacing.inset.xs};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  width: 20px;
`

const StyledIconFoldMenu = styled(MenuFold)(iconToggleMenuStyle);

const StyledIconUnfoldMenu = styled(MenuUnfold)(iconToggleMenuStyle);

const StyledSidebarNavigatorItemLinkName = styled.span``

const StyledSidebarFooter = styled.footer`
  position: relative;
  flex-basis: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.brand.color.primary.pure};
  padding: ${({ theme }) => theme.spacing.size.xs} 0;
  width: 100%;
  box-sizing: border-box;
  border-top: solid 1px white;
  color: white;
  bottom: 0;
`

const StyledSidebarFooterActionContainer = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0 ${({ theme }) => theme.spacing.size.xs};
  box-sizing: border-box;
`

const StyledSidebarFooterActionItem = styled.li<{ isFolded: boolean; }>`
  width: 100%;
  ${({ isFolded }) => !isFolded 
    ? css`
      padding: 0 ${({ theme }) => theme.spacing.inset.sm};
      justify-content: space-between;
  `
    : css`
      justify-content: space-around;
  `}
  box-sizing: border-box;
  display: flex;
  line-height: 50px;
  border-radius: ${({ theme }) => theme.border.radius.sm};
  transition: color .8s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.brand.color.secondary.pure};
    background-color: ${({ theme }) => theme.brand.color.primary.dark};
  }

  &:hover ${StyledIconFoldMenu}, &:hover ${StyledIconUnfoldMenu} {
    color: ${({ theme }) => theme.brand.color.secondary.pure};
  }
`

const Sidebar: React.FunctionComponent<SidebarProps> = (props) => {
  const [isFolded, setIsFolded] = React.useState<boolean>(false);
  const [isOpened, setIsOpened] = React.useState<boolean>(props.open || true);

  return (
    <StyledSidebar isOpened={isOpened} isFolded={isFolded}>
      <StyledSidebarHeader isOpened={isOpened} isFolded={isFolded}>
        {(!isFolded && isOpened) && <Logo />}
        <StyledCloseMenuIcon onClick={() => setIsOpened(false)} />
      </StyledSidebarHeader>
      <StyledSidebarNavigator>
        {props.items.map(({ icon: Icon, name, href }, idx: number) => {
          return (
            <StyledSidebarNavigatorItem key={idx}>
              <StyledSidebarNavigatorItemLink href={href}>
                <StyledNavigatorItemIconWrapper>
                  <Icon /> 
                </StyledNavigatorItemIconWrapper>
                {(!isFolded && isOpened) && <StyledSidebarNavigatorItemLinkName>
                  {name}
                </StyledSidebarNavigatorItemLinkName>}
              </StyledSidebarNavigatorItemLink>
            </StyledSidebarNavigatorItem>
          );
        })}
      </StyledSidebarNavigator>
      <StyledSidebarFooter>
        <StyledSidebarFooterActionContainer>
          <StyledSidebarFooterActionItem isFolded={isFolded} onClick={() => setIsFolded(!isFolded)}>
            {(!isFolded && isOpened) && <span>Minimizar</span>}
            <StyledIconToggleMenu>
              {!isFolded ? (
                <StyledIconFoldMenu />
              ) : (
                <StyledIconUnfoldMenu />
              )}
            </StyledIconToggleMenu>
          </StyledSidebarFooterActionItem>
        </StyledSidebarFooterActionContainer>
      </StyledSidebarFooter>
    </StyledSidebar>
  );
}

export default Sidebar;
