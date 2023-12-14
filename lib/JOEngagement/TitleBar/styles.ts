import { css } from '@emotion/react'

import { RICH_GRAY_40, RICH_GRAY_30, RICH_GRAY_0, TART_RED_60 } from '../../styles/colors'

export const styles = () => css`
  .joe-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid ${RICH_GRAY_40};

    &__title {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
    }

    &__filters {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;

      .joe-textfield {
        width: 280px;
      }

      &--icons {
        display: flex;
        gap: 12px;

        svg {
          cursor: pointer;
          padding: 4px;

          :hover {
            background-color: ${RICH_GRAY_30};
            border-radius: 100%;
          }
        }

        > div {
          position: relative;

          span {
            position: absolute;
            width: 6px;
            height: 6px;
            border: solid 1px ${RICH_GRAY_0};
            background-color: ${TART_RED_60};
            border-radius: 100%;
            top: 4px;
            left: 22px;
          }
        }
      }
    }
  }
`
