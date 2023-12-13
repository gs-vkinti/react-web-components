import { css } from '@emotion/react'

export const styles = () => css`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--rich-gray-30, #e6e9ec);

  .label {
    color: green;
  }

  .header_text {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
`
