import { css } from '@emotion/react'

import {
  RICH_GRAY_40,
  RICH_GRAY_30,
  RICH_GRAY_0,
  TART_RED_60,
  RICH_GRAY_90,
  RICH_GRAY_20,
  ROYAL_BLUE_70
} from '../../styles/colors'
import { POPOVER_SHADOW } from '../../styles/typography'

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
            background-color: ${RICH_GRAY_20};
            border-radius: 100%;
          }
        }

        &-selected {
          svg {
            border-radius: 100%;
            background-color: ${RICH_GRAY_30} !important;
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

export const popoverStyles = () => css`
  .joe-sort-filter-popover {
    width: 240px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 8px 0;
    border-radius: 4px;
    box-shadow: ${POPOVER_SHADOW}
    background-color: ${RICH_GRAY_0};

    &__item {
      font-size: 14px;
      line-height: 1.71;
      letter-spacing: normal;
      text-align: left;
      color: ${RICH_GRAY_90};
      padding: 4px 16px;
      cursor: pointer;

      &:hover {
        background-color: ${RICH_GRAY_20};
      }

      &--selected {
        color: ${ROYAL_BLUE_70};
      }
    }
  }
`
