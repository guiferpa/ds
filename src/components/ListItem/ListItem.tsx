import React from 'react';
import styled, { css } from 'styled-components';

export interface ListItemProps {}

const listItemResetStyle = () => css``

const listItemBaseStyle = () => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${({ theme }) => `${theme.spacing.size.xs} ${theme.spacing.size.md}`};
  width: 100%;
  min-height: 80px;
  box-sizing: border-box;
  margin-bottom: ${({ theme }) => theme.spacing.size.sm};
  border-radius: ${({ theme }) => theme.spacing.size.xs};
  box-shadow: ${({ theme }) => theme.shadow.intensity.one} ${({ theme }) => theme.brand.color.light.medium};
  font-weight: ${({ theme }) => theme.brand.typography.weight.bold};

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.brand.color.light.pure};
  }

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.brand.color.light.light};
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.brand.color.primary.light};
  }

  @media screen and (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.size.sm};
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => `${theme.spacing.size.sm} ${theme.spacing.size.sm}`};
  }
`

const StyledListItem = styled.li(
  listItemResetStyle,
  listItemBaseStyle,
);

const ListItem: React.FunctionComponent<ListItemProps> = (props) => {
  return (
    <StyledListItem {...props} >{props.children}</StyledListItem>
  );
}

export default ListItem;
