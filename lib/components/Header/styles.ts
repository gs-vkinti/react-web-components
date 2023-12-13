import { css } from '@emotion/react'
import * as colors from '../../styles/colors'

export const styles = () => css`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${colors.RICH_GRAY_30};

  .joe-header__title {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
`
