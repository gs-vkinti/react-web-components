import { css } from '@emotion/react'
import * as colors from '../../styles/colors'

export const styles = () => css`
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid ${colors.RICH_GRAY_40};
`
