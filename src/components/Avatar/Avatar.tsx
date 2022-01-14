import React from 'react';
import styled, { css } from 'styled-components';
import { IoMdPerson } from 'react-icons/io';

const StyledPersonIcon = styled(IoMdPerson)`
  color: ${({ theme }) => theme.brand.color.heavy.dark};
  width: 1200px;
`

export interface AvatarPlaceholderProps {}

const avatarPlaceholderResetStyle = (props: AvatarPlaceholderProps) => css`
  border: none;
  margin: 0;
`

const avatarPlaceholderBaseStyle = (props: AvatarPlaceholderProps) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.brand.color.light.medium};
`

const StyledAvatarPlaceholder = styled.div(
  avatarPlaceholderResetStyle,
  avatarPlaceholderBaseStyle
);

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const avatarImageResetStyle = () => css``

const avatarImageBaseStyle = () => css`
  width: 100%;
`

const StyledAvatarImage = styled.img(
  avatarImageResetStyle,
  avatarImageBaseStyle
);

export interface AvatarProps {
  src?: string;
  medium?: boolean;
  large?: boolean;
}

const avatarResetStyle = (props: AvatarProps) => css`
  border: none;
  margin: 0;
`

const avatarBaseStyle = (props: AvatarProps) => css`
  clip-path: circle(${({ theme }) => theme.border.radius.circle} at center);
`

const avatarSmallStyle = (props: AvatarProps) => css`
  width: 40px;
  height: 40px;
`

const avatarMediumStyle = (props: AvatarProps) => props.medium && css`
  width: 60px;
  height: 60px;
`

const avatarLargeStyle = (props: AvatarProps) => props.large && css`
  width: 100px;
  height: 100px;
`

const StyledContainerAvatar = styled.div(
  avatarResetStyle,
  avatarBaseStyle,
  avatarSmallStyle,
  avatarMediumStyle,
  avatarLargeStyle
);

const Avatar: React.FunctionComponent<AvatarProps> = (props) => {
  return (
    <StyledContainerAvatar {...props}>
      {props.src ? (
        <StyledAvatarImage src={props.src} />
      ) : (
        <StyledAvatarPlaceholder>
          <StyledPersonIcon size={"50%"} />
        </StyledAvatarPlaceholder>
      )}
    </StyledContainerAvatar>
  );
}

export default Avatar;
