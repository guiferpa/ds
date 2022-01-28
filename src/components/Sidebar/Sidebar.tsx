import React from 'react';
import styled, { css } from 'styled-components';
import { MenuFold, MenuUnfold } from '@styled-icons/remix-line';
import { Close } from '@styled-icons/evaicons-solid';

export interface ItemProps {
  icon: React.ComponentType<any>;
  name: string;
  href?: string;
}

export interface SidebarProps {
  open?: boolean;
  fold?: boolean;
  items: ItemProps[];

  onFold?: () => void;
}

const sidebarResetStyle = () => css``

const sidebarBaseStyle = (props: { isFolded: boolean; isOpened: boolean; }) => css`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: ${ props.isOpened ? (!props.isFolded ? "290px" : "90px") : "0px" };
  height: 100%;
  transition: width 1s;
  background-color: ${({ theme }) => theme.brand.color.primary.pure};
  z-index: 999;
`

const StyledSidebar = styled.nav(
  sidebarResetStyle,
  sidebarBaseStyle
);

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

const iconToggleMenuStyle = () => css`
  color: ${({ theme }) => theme.brand.color.light.pure};
  padding: ${({ theme }) => theme.spacing.inset.xs};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  width: 20px;
`

const StyledIconFoldMenu = styled(MenuFold)(iconToggleMenuStyle);

const StyledIconUnfoldMenu = styled(MenuUnfold)(iconToggleMenuStyle);

const StyledIconCloseMenu = styled(Close)(iconToggleMenuStyle);

const StyledSidebarNavigatorItemLinkName = styled.span``

const StyledSidebarFooter = styled.footer`
  box-sizing: border-box;
  flex-basis: 80px;
  width: 100%;
  border-top: solid ${({ theme }) => `${theme.border.size.sm} ${theme.brand.color.light.pure}`};
  background-color: ${({ theme }) => theme.brand.color.primary.pure};
  color: ${({ theme }) => theme.brand.color.light.pure};
  padding: ${({ theme }) => theme.spacing.size.xs} 0;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  &:hover ${StyledIconFoldMenu}, &:hover ${StyledIconUnfoldMenu}, &:hover ${StyledIconCloseMenu} {
    color: ${({ theme }) => theme.brand.color.secondary.pure};
  }
`

const Sidebar: React.FunctionComponent<SidebarProps> = (props) => {
  const { open: isOpened = false, fold: isFolded = false } = props;

  return (
    <StyledSidebar isOpened={isOpened} isFolded={isFolded}>
      <StyledSidebarNavigator>
        {isOpened && props.items.map(({ icon: Icon, name, href }, idx: number) => {
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
      {isOpened && (
      <StyledSidebarFooter>
        <StyledSidebarFooterActionContainer>
            <StyledSidebarFooterActionItem 
              isFolded={isFolded} 
              onClick={() => {
                props.onFold && props.onFold();
              }}
            >
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
      )}
    </StyledSidebar>
  );
}

export default Sidebar;
