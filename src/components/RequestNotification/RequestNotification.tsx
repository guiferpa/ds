import React from 'react';
import styled, { css } from 'styled-components';

export interface RequestNotificationProps {
  title: string;
  actionRender: () => React.ReactNode;
}

const StyledRequestNotification = styled.div`
  border-radius: ${({ theme }) => theme.border.radius.sm};
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  box-shadow: ${({ theme }) => theme.shadow.intensity.one} ${({ theme }) => theme.brand.color.light.medium};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.inset.sm};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledRequestNotificationTitle = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.brand.color.heavy.light};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.brand.typography.weight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.size.sm};
`

const StyledRequestNotificationData = styled.span``

const StyledRequestNotficationAction = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.size.md};
`;

const RequestNotification: React.FunctionComponent<RequestNotificationProps> = (props) => {
  return (
    <StyledRequestNotification>
      <StyledRequestNotificationTitle>
        {props.title}
      </StyledRequestNotificationTitle>
      <StyledRequestNotificationData>
        {props.children}
      </StyledRequestNotificationData>
      <StyledRequestNotficationAction>
        {props.actionRender()}
      </StyledRequestNotficationAction>
    </StyledRequestNotification>
  );
}

export default RequestNotification;
