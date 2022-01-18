import React from 'react';
import styled, { css } from 'styled-components';
import { ArrowIosForward } from '@styled-icons/evaicons-solid';
import Link from '../Link';

export interface Crumb {
  name: string;
  path: string;
}

const breadcrumbResetStyle = () => css`
  margin: 0;
  padding: 0;
  list-style: none;
`

const breadcrumbBaseStyle = () => css`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.size.sm};
`

const StyledBreadcrumb = styled.ul(
  breadcrumbResetStyle,
  breadcrumbBaseStyle
);

const breadcrumbItemResetStyle = () => css``

const StyledBreadcrumbItem = styled.li(
  breadcrumbItemResetStyle
);

const breadcrumbMarkerResetStyle = () => css``


const StyledBreadcrumbMarker = styled(ArrowIosForward)(
  breadcrumbMarkerResetStyle
);

export interface BreadcrumbProps {
  crumbs: Crumb[];
}

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = (props) => {
  return (
    <StyledBreadcrumb>
      {props.crumbs.map((crumb, idx) => (
        <React.Fragment key={idx}>
          <StyledBreadcrumbItem>
            <Link href={crumb.path}> {crumb.name} </Link>
          </StyledBreadcrumbItem>
          {(idx < (props.crumbs.length - 1)) && <StyledBreadcrumbMarker size={"10px"} />}
        </React.Fragment>
      ))}
    </StyledBreadcrumb>
  );
}

export default Breadcrumb;
