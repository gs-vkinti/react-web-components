import { css } from '@emotion/react'
import * as colors from '../../styles/colors'

export const styles = () => css`
  .joe-search {
    display: flex;
    width: 280px;
    padding: 4px 6px 4px 12px;
    align-items: center;
    gap: 8px;

    border-radius: 4px;
    border: 1px solid ${colors.RICH_GRAY_40};
  }

  .joe-search--active {
    border: 1px solid ${colors.ROYAL_BLUE_70};
  }
  input {
    border: 0;
    padding: 0;
    box-shadow: none;
  }
  input::placeholder {
    color: ${colors.RICH_GRAY_50};
  }
  input:focus {
    outline: none;
  }
`
