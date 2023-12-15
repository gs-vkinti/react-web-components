import { css } from '@emotion/react'
import { RICH_GRAY_30 } from '../../styles/colors'

export const styles = () => {
  return css`
    .joe-footer {
      height: 56px;
      border-top: 1px solid ${RICH_GRAY_30};
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  `
}
