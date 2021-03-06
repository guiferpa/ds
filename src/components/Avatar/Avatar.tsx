import React from 'react';
import styled, { css } from 'styled-components';
import { Person, CameraAlt } from '@styled-icons/material';

const StyledPersonIcon = styled(Person)`
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
  xlarge?: boolean;
  isEditable?: boolean;
  hasNotification?: boolean;
  onChangePhoto?: (file: File) => void;
}

const avatarResetStyle = () => css`
  border: none;
  margin: 0;
`

const avatarBaseStyle = () => css`
  position: relative;
  font-weight: ${({ theme }) => theme.brand.typography.weight.medium};
`

const avatarSmallStyle = () => css`
  width: 40px;
  height: 40px;
`

const avatarMediumStyle = (props: AvatarProps) => props.medium && css`
  width: 60px;
  height: 60px;
  font-size: ${({ theme }) => theme.typography.size.xs};
`

const avatarLargeStyle = (props: AvatarProps) => props.large && css`
  width: 90px;
  height: 90px;
  font-size: ${({ theme }) => theme.typography.size.sm};
`

const avatarExtraLargeStyle = (props: AvatarProps) => props.xlarge && css`
  width: 140px;
  height: 140px;
  font-size: ${({ theme }) => theme.typography.size.md};
`

const StyledContainerAvatar = styled.div(
  avatarResetStyle,
  avatarBaseStyle,
  avatarSmallStyle,
  avatarMediumStyle,
  avatarLargeStyle,
  avatarExtraLargeStyle
);

const StyledAvatarMaskEditableTextContainer = styled.div`
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`

const StyledAvatarMaskEditableIcon = styled(CameraAlt)``

const StyledAvatarMaskEditableText = styled.span`
  position: relative;
  display: inline-block;
`

const avatarNotificationMarkerResetStyle = () => css``

const avatarNotificationMarkerBaseStyle = () => css`
  width: 18%;
  height: 18%;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-25%, 50%);
  border-radius: ${({ theme }) => theme.border.radius.circle};
  background-color: ${({ theme }) => theme.brand.color.feedback.failure.pure};
`

const StyledAvatarNotificationMarker = styled.span(
  avatarNotificationMarkerResetStyle,
  avatarNotificationMarkerBaseStyle
);

export interface AvatarMaskProps {
  isEditable?: boolean;
}

const avatarMaskResetStyle = () => css``

const avatarMaskBaseStyle = () => css`
  clip-path: circle(${({ theme }) => theme.border.radius.circle} at center);
  width: 100%;
  height: 100%;
`

const avatarMaskIsEditableStyle = (props: AvatarMaskProps) => props.isEditable && css`
  &:hover {
    background-color: ${({ theme }) => theme.brand.color.primary.dark};
    cursor: pointer;
  }

  &:hover ${StyledAvatarMaskEditableTextContainer} {
    visibility: visible;
  }

  &:hover img, &:hover ${StyledAvatarPlaceholder} {
    opacity: .4;
  }
`

const StyledAvatarMask = styled.div(
  avatarMaskResetStyle,
  avatarMaskBaseStyle,
  avatarMaskIsEditableStyle
);

const Avatar: React.FunctionComponent<AvatarProps> = (props) => {
  const inputImgEl = React.useRef<HTMLInputElement>(null);

  const [image, setImage] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string>(props.src || "");

  React.useEffect(() => {
    if (image) {
      props.onChangePhoto && props.onChangePhoto(image);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      }
      reader.readAsDataURL(image);
    } else {
      setPreview(props.src || "");
    }
  }, [image]);

  return (
    <StyledContainerAvatar {...props} onClick={() => {
      props.isEditable && inputImgEl.current?.click();
    }}>
      <StyledAvatarMask isEditable={props.isEditable}>
        {preview ? (
          <StyledAvatarImage src={preview} />
        ) : (
          <StyledAvatarPlaceholder>
            <StyledPersonIcon size={"50%"} />
          </StyledAvatarPlaceholder>
        )}
        <StyledAvatarMaskEditableTextContainer>
          <StyledAvatarMaskEditableIcon size={"18%"} />
          <StyledAvatarMaskEditableText>
            Trocar foto
          </StyledAvatarMaskEditableText>
        </StyledAvatarMaskEditableTextContainer>
      </StyledAvatarMask>
      <input 
        type={"file"} 
        ref={inputImgEl} 
        style={{ display: "none" }} 
        accept="image/*"
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
          if (evt.target.files?.length !== 1) return; // TODO: come back to handle with best practices
          const file: File = evt.target.files[0];
          setImage(file);
        }}
      />
      {props.hasNotification && <StyledAvatarNotificationMarker />}
    </StyledContainerAvatar>
  );
}

export default Avatar;
