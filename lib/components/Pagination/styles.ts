import { css } from '@emotion/react'
import { RICH_GRAY_20, RICH_GRAY_30, ROYAL_BLUE_10, ROYAL_BLUE_40, ROYAL_BLUE_70 } from '../../styles/colors'

export default function styles() {
  return css`
    .pagination {
      display: inline-flex;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      cursor: pointer;
      &__value {
        padding: 4px 8px;
        border-radius: 4px;
        &--active {
          border: 1px solid ${ROYAL_BLUE_40};
          background: ${ROYAL_BLUE_10};
          font-weigth: 600;
        }
        &:hover {
          color: ${ROYAL_BLUE_70};
          font-weigth: 600;
        }
      }
      &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        margin: 4px;
        &--active {
          &:hover {
            background: ${RICH_GRAY_20};
          }
          &:active,
          &:focus {
            background: ${RICH_GRAY_30};
          }
        }
      }
    }
  `
}
