import React from 'react';
import styled from 'styled-components';

export interface ListProps {}

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-styled: none;
  margin: ${({ theme }) => theme.spacing.size.md} 0;
  width: 100%;
  box-sizing: border-box;
`

const List: React.FunctionComponent<ListProps> = (props) => {
  return (
    <StyledList {...props} >{props.children}</StyledList>
  );
}

export default List;
