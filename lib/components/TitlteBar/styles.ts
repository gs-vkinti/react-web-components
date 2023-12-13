import { css } from '@emotion/react'

import { RICH_GRAY_40 } from '../../styles/colors'

export const styles = () => css`
  .joe-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid ${RICH_GRAY_40};

    &__title {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
    }
  }
`
