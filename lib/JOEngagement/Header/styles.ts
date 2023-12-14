import { css } from '@emotion/react'
import { RICH_GRAY_30 } from '../../styles/colors'

export const styles = () => css`
  .joe-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 24px;
    border-bottom: solid 1px ${RICH_GRAY_30};

    &__title {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.33;
      text-align: left;
    }

    &__cancel-icon {
      cursor: pointer;
    }
  }
`
