import { css } from '@emotion/react'

import { RICH_GRAY_40 } from '../../styles/colors'

export const styles = () => css`
  .joe-filters-bar {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid ${RICH_GRAY_40};
    overflow: auto;
  }
`
