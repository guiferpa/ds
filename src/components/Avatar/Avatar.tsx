import React, { ChangeEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { IoMdPerson } from 'react-icons/io';
import { MdCameraAlt } from 'react-icons/md';

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
  xlarge?: boolean;
  isEditable?: boolean;
  onChangePhoto?: (file: File) => void;
}

const avatarResetStyle = () => css`
  border: none;
  margin: 0;
`

const avatarBaseStyle = () => css``

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
  width: 100px;
  height: 100px;
  font-size: ${({ theme }) => theme.typography.size.sm};
`

const avatarExtraLargeStyle = (props: AvatarProps) => props.xlarge && css`
  width: 160px;
  height: 160px;
  font-size: ${({ theme }) => theme.typography.size.md};
`

const avatarEditableStyle = (props: AvatarProps) => props.isEditable && css`
  position: relative;
`

const StyledContainerAvatar = styled.div(
  avatarResetStyle,
  avatarBaseStyle,
  avatarSmallStyle,
  avatarMediumStyle,
  avatarLargeStyle,
  avatarExtraLargeStyle,
  avatarEditableStyle
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

const StyledAvatarMaskEditableIcon = styled(MdCameraAlt)``

const StyledAvatarMaskEditableText = styled.span`
  position: relative;
  display: inline-block;
`

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
  const inputImgEl = React.useRef(null);

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
    </StyledContainerAvatar>
  );
}

export default Avatar;
