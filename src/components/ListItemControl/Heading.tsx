import React from 'react';
import styled, { css } from 'styled-components';

import Button from '../Button';

export interface ListItemControlProps {}

const ListItemControl = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.size.sm};
  box-sizing: border-box;
  flex-basis: content;

  @media screen and (max-width: 768px) {
    width: 100%;

    ${Button} {
      width: 100%;
    }
  }

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`

const Heading: React.FunctionComponent<ListItemControlProps> = (props) => {
  return (
    <ListItemControl {...props} >{props.children}</ListItemControl>
  );
}

export default Heading;
