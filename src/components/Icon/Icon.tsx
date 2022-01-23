import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { SpinnerIos } from '@styled-icons/fluentui-system-filled';
import { Folder } from '@styled-icons/fa-solid';
import { LabFlask } from '@styled-icons/entypo';
import { Person } from '@styled-icons/material';
import { MenuFold, MenuUnfold } from '@styled-icons/remix-line';

export interface IconProps {
  loop?: boolean;
  ease?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
}

const iconLoopAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const iconResetStyle = () => css``

const iconBaseStyle = (props: IconProps) => css``

const iconLinearAnimationStyle = (props: IconProps) => props.loop && css`
  animation: ${iconLoopAnimation} 1s linear infinite;
`

const iconEaseAnimationStyle = (props: IconProps) => props.ease && css`
  animation: ${iconLoopAnimation} 1s cubic-bezier(0.4, 0.2, 0.1, 0) infinite;
`

const iconSmallStyle = () => css`
  width: 25px;
`

const iconMediumStyle = (props: IconProps) => props.medium && css`
  width: 40px;
`

const iconLargeStyle = (props: IconProps) => props.large && css`
  width: 75px;
`

const iconExtraLargeStyle = (props: IconProps) => props.xlarge &&  css`
  width: 120px;
`

const generateStyledIcon = (icon: any) => styled(icon)<IconProps>(
  iconResetStyle,
  iconBaseStyle,
  iconSmallStyle,
  iconMediumStyle,
  iconLargeStyle,
  iconExtraLargeStyle,
  iconLinearAnimationStyle,
  iconEaseAnimationStyle
);

export const SpinnerIcon = generateStyledIcon(SpinnerIos);
export const FolderIcon = generateStyledIcon(Folder);
export const LabIcon = generateStyledIcon(LabFlask);
export const PersonIcon = generateStyledIcon(Person);
export const MenuFoldIcon = generateStyledIcon(MenuFold);
export const MenuUnfoldIcon = generateStyledIcon(MenuUnfold);
