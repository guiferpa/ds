import React from 'react';
import styled, { css } from 'styled-components';

export interface UserProfileMenuItemWithBadgeProps {
  label: string;
  href: string;
  badge?: string;
  activated?: boolean;
  danger?: boolean;
}

const userProfileMenuSectionListItemResetStyle = () => css`
  margin: 0;
  padding: 0;
  list-style: none;
`

const userProfileMenuSectionListItemBaseStyle = () => css`
  width: 100%;
`;

const StyledUserProfileMenuListItem = styled.li(
  userProfileMenuSectionListItemResetStyle,
  userProfileMenuSectionListItemBaseStyle
);

interface UserProfileMenuItemLinkWithBadgeProps {
  activated?: boolean;
  danger?: boolean;
}

const userProfileMenuListItemLinkResetStyle = () => css`
  text-decoration: none;
`

const userProfileMenuListItemLinkBaseStyle = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.inset.xs};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  font-size: ${({ theme }) => theme.typography.size.md};
  font-weight: ${({ theme }) => theme.brand.typography.weight.medium};
  color: ${({ theme }) => theme.brand.color.primary.dark};
  line-height: 30px;
  
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.brand.color.light.light};
  }
`

const userProfileMenuListItemLinkActivatedStyle = (props: UserProfileMenuItemLinkWithBadgeProps) => props.activated && css`
  color: ${({ theme }) => theme.brand.color.primary.pure};
  font-weight: ${({ theme }) => theme.brand.typography.weight.bold};
`

const userProfileMenuListItemLinkDangerStyle = (props: UserProfileMenuItemLinkWithBadgeProps) => props.danger && css`
  color: ${({ theme }) => theme.brand.color.tertiary.pure};
`

const StyledUserProfileMenuListItemLink = styled.a(
  userProfileMenuListItemLinkResetStyle,
  userProfileMenuListItemLinkBaseStyle,
  userProfileMenuListItemLinkActivatedStyle,
  userProfileMenuListItemLinkDangerStyle
);

const StyledBadge = styled.span`
  background-color: ${({ theme }) => theme.brand.color.tertiary.pure};
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.brand.color.light.pure};
  padding: 0 ${({ theme }) => theme.spacing.inset.xs};
  border-radius: ${({ theme }) => theme.border.radius.sm};
`

const UserProfileMenuItemWithBadge: React.FunctionComponent<UserProfileMenuItemWithBadgeProps> = (props) => {
  return (
    <StyledUserProfileMenuListItem>
      <StyledUserProfileMenuListItemLink 
        href={props.href} 
        activated={props.activated}
        danger={props.danger}
      >
        <span>{ props.label }</span>
        {props.badge && <StyledBadge>{props.badge}</StyledBadge>}
      </StyledUserProfileMenuListItemLink>
    </StyledUserProfileMenuListItem>
  );
}

export default UserProfileMenuItemWithBadge;
