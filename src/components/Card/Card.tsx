import React from 'react';
import styled, { css } from 'styled-components';

export interface CardProps {}

const cardResetStyle = (props: CardProps) => css`
  border: none;
  margin: 0;
`

const cardBaseStyle = () => css`
  border-radius: ${({ theme }) => theme.border.radius.sm};
  width: 320px;
  min-height: 380px;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  box-shadow: ${({ theme }) => theme.shadow.intensity.one} ${({ theme }) => theme.brand.color.light.medium};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.inset.sm};
`

export const StyledCard = styled.div(
  cardResetStyle,
  cardBaseStyle
);

const Card: React.FunctionComponent<CardProps> = (props) => {
  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
}

export default Card;
