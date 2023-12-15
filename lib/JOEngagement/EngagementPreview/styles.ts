import { css } from '@emotion/react'

import { RICH_GRAY_40, RICH_GRAY_60 } from '../../styles/colors'

export const styles = () => css`
  .joe-title-bar {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 12px 0;
    gap: 8px;
    border-bottom: 1px solid ${RICH_GRAY_40};
    &__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      line-height: 1.5;
      &__title {
        font-size: 16px;
        font-weight: 600;
      }
      &__description {
        overflow: hidden;
        color: ${RICH_GRAY_60};
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        font-weight: 400;
      }
    }
    &__back-icon {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`
