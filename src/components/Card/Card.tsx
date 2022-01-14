import React from 'react';
import styled, { css } from 'styled-components';

export interface CardProps {}

const cardResetStyle = (props: CardProps) => css`
  border: none;
  margin: 0;
`

const cardBaseStyle = (props: CardProps) => css`
  border-radius: ${({ theme }) => theme.border.radius.sm};
  max-width: 320px;
  min-height: 380px;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  box-shadow: ${({ theme }) => theme.shadow.intensity.one} ${({ theme }) => theme.brand.color.light.medium};
`

export const StyledCard = styled.div(
  cardResetStyle,
  cardBaseStyle
);

const Card: React.FunctionComponent<CardProps> = (props: CardProps) => {
  return <StyledCard {...props} />;
}

export default Card;
