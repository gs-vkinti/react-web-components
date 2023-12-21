import { css } from '@emotion/react'

import { EngagementsListProps } from '../JOEngagement.types'
import { RICH_GRAY_10, RICH_GRAY_30 } from '../../styles/colors'

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
    &--empty {
      flex-direction: column;
      gap: 40px;
      padding: 0;
      overflow: hidden;
      margin-top: 16px;
      border: 1px solid ${RICH_GRAY_30};
      background: ${RICH_GRAY_10};
      &__title {
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      }
    }
  }
`
