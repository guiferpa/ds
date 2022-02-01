import React from 'react';
import styled, { css } from 'styled-components';

export interface ListItemLabelProps {}

const listItemLabelResetStyle = () => css``

const listItemLabelBaseStyle = () => css`
  text-align: left;
  word-break: break-word;
  box-sizing: border-box;
`

const StyledList = styled.span(
  listItemLabelResetStyle,
  listItemLabelBaseStyle,
);

const ListItemLabel: React.FunctionComponent<ListItemLabelProps> = (props) => {
  return (
    <StyledList {...props} >{props.children}</StyledList>
  );
}

export default ListItemLabel;
