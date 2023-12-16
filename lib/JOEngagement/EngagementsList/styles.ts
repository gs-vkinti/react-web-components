import { css } from '@emotion/react'

import { EngagementsListProps } from '../JOEngagement.types'

export const styles = (props: EngagementsListProps) => css`
  .joe-engagements-list {
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

    overflow: scroll;
    height: calc(100vh - ${props.openFilterBar ? '208px' : '151px'});
  }
`
