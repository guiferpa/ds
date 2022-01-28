import React from 'react';
import styled, { css } from 'styled-components';

import UserProfileMenuItem, { UserProfileMenuItemProps } from '../UserProfileMenuItem/UserProfileMenuItem';

export interface UserProfileMenuSectionProps {
  title: string;
  items: UserProfileMenuItemProps[];
}

const userProfileMenuSectionResetStyle = () => css``

const userProfileMenuSectionBaseStyle = () => css``

const StyledUserProfileMenuSection = styled.div(
  userProfileMenuSectionResetStyle,
  userProfileMenuSectionBaseStyle
);

const userProfileMenuSectionTitleResetStyle = () => css``

const userProfileMenuSectionTitleBaseStyle = () => css`
  text-transform: uppercase;
  color: ${({ theme }) => theme.brand.color.heavy.light};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.brand.typography.weight.bold};
`

const StyledUserProfileMenuSectionTitle = styled.span(
  userProfileMenuSectionTitleResetStyle,
  userProfileMenuSectionTitleBaseStyle
);

const userProfileMenuSectionListResetStyle = () => css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const userProfileMenuSectionListBaseStyle = () => css`
  margin-top: ${({ theme }) => theme.spacing.size.xs};
  padding-left: ${({ theme }) => theme.spacing.size.xs};
  max-height: 150px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const StyledUserProfileMenuSectionList = styled.ul(
  userProfileMenuSectionListResetStyle,
  userProfileMenuSectionListBaseStyle
);

const UserProfileMenuSection: React.FunctionComponent<UserProfileMenuSectionProps> = (props) => {
  return (
    <StyledUserProfileMenuSection>
      <StyledUserProfileMenuSectionTitle>
        {props.title}
      </StyledUserProfileMenuSectionTitle>
      <StyledUserProfileMenuSectionList>
        {props.items.map((propsItem, idx) => {
          return (
            <UserProfileMenuItem {...propsItem} key={idx} />
          );
        })}
      </StyledUserProfileMenuSectionList>
    </StyledUserProfileMenuSection>
  );
}

export default UserProfileMenuSection;
