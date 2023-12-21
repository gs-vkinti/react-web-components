import { css } from '@emotion/react'

import { POPOVER_SHADOW } from '../../styles/typography'
import {
  LAVENDER_PURPLE_60,
  LAVENDER_PURPLE_30,
  LAVENDER_PURPLE_90,
  RICH_GRAY_90,
  RICH_GRAY_20,
  RICH_GRAY_30,
  RICH_GRAY_0
} from '../../styles/colors'

export const styles = () => css`
  .joe-filter-dropdown {
    display: flex;
    align-items: center;
    padding: 0 4px;
    gap: 8px;
    cursor: pointer;

    &:hover {
      border-radius: 4px;
      background-color: ${RICH_GRAY_20};
    }

    &__selected {
      border-radius: 4px;
      background-color: ${RICH_GRAY_30} !important;
    }

    &__alphabet {
      font-size: 12px;
      font-weight: 600;
      line-height: 1.33;
      text-align: left;
      color: ${LAVENDER_PURPLE_90};
      padding: 0 5px 0 6px;
      border-radius: 2px;
      border: solid 1px ${LAVENDER_PURPLE_60};
      background-color: ${LAVENDER_PURPLE_30};
    }

    &__options {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    &__filter-label {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.71;
      letter-spacing: normal;
      text-align: left;
      color: ${RICH_GRAY_90};
      text-transform: capitalize;
    }

    &__filter-value {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.71;
      letter-spacing: normal;
      text-align: left;
      color: ${RICH_GRAY_90};
    }
  }
`

export const popoverStyles = () => css`
  max-height: 312px;

  .joe-filter-popover {
    width: 312px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 12px 0;
    border-radius: 4px;
    box-shadow: ${POPOVER_SHADOW};
    background-color: ${RICH_GRAY_0};

    &__item {
      padding: 0 16px 0 12px;

      &--all {
        .jeo-checkbox .MuiFormControlLabel-root {
          width: 100%;
          .MuiTypography-root {
            width: 100%;
            > div {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;

              font-size: 11px;
              font-weight: 600;
              line-height: 1.45;

              > div:nth-child(2) {
                cursor: default;
              }
            }
          }
        }
      }
    }
    &__search {
      padding: 0 16px 0 12px;
      border: 0;
      font-size: 14px;
      width: 284px;
    }
  }
`
