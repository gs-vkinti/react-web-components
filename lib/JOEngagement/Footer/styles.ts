import { css } from '@emotion/react'
import { RICH_GRAY_30 } from '../../styles/colors'

export const styles = () => {
  return css`
    .joe-footer {
      border-top: 1px solid ${RICH_GRAY_30};
      position: absolute;
      bottom: 0;
      left: 0;
      width: calc(100% - 32px);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
      padding: 12px 16px;
    }
  `
}
