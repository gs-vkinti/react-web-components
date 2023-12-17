import { css } from '@emotion/react'

import {
  RICH_GRAY_90,
  RICH_GRAY_30,
  RICH_GRAY_10,
  RICH_GRAY_60,
  BELL_BLUE_40,
  BELL_BLUE_20,
  ROYAL_BLUE_10,
  ROYAL_BLUE_70,
  BRONZE_BROWN_40,
  BRONZE_BROWN_20,
  BRONZE_BROWN_90,
  LAVENDER_PURPLE_40,
  LAVENDER_PURPLE_20
} from '../../styles/colors'
import { POPOVER_SHADOW } from '../../styles/typography'

export const styles = () => css`
  .joe-engagement-card {
    width: 366px;
    height: 288px;
    border: solid 1px ${RICH_GRAY_30};
    cursor: pointer;
    border-radius: 4px;

    &__skeleton {
      cursor: default;
    }

    &__selected {
      width: 364px;
      border: solid 2px ${ROYAL_BLUE_70};
    }

    &__view {
      height: 180px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${RICH_GRAY_10};
      border-bottom: solid 1px ${RICH_GRAY_30};

      &--selected {
        background-color: ${ROYAL_BLUE_10};
      }

      &--tick-icon {
        position: absolute;
        top: 12px;
        right: 12px;
      }

      &--type {
        position: absolute;
        top: 12px;
        left: 12px;

        font-size: 11px;
        font-weight: normal;
        line-height: 1.45;
        letter-spacing: normal;
        text-align: left;
        padding: 0 4px;
        text-transform: capitalize;
        border-radius: 4px;

        &-guide {
          border: solid 1px ${BELL_BLUE_40};
          background-color: ${BELL_BLUE_20};
          color: #3c4abd;
        }

        &-slider {
          border: solid 1px ${BRONZE_BROWN_40};
          background-color: ${BRONZE_BROWN_20};
          color: ${BRONZE_BROWN_90};
        }

        &-dialog {
          border: solid 1px ${LAVENDER_PURPLE_40};
          background-color: ${LAVENDER_PURPLE_20};
          color: #712bba;
        }
      }

      &--image {
        width: 144px;
        height: 148px;
        flex-grow: 0;
      }
    }

    &__info {
      padding: 16px;

      &--label {
        font-size: 14px;
        font-weight: 600;
        line-height: 1.71;
        text-align: left;
        color: ${RICH_GRAY_90};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &--environments {
        font-size: 12px;
        font-weight: normal;
        line-height: 1.33;
        text-align: left;
        color: ${RICH_GRAY_60};
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 4px;

        > div {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        &-dot {
          width: 4px;
          height: 4px;
          flex-grow: 0;
          background-color: ${RICH_GRAY_60};
          border-radius: 100%;
        }
      }

      &--labels {
        margin-top: 16px;
        display: flex;
        align-items: center;
        gap: 8px;

        &-chip {
          padding: 0 6px;

          display: block;
          max-width: calc(40%);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          font-size: 11px;
          font-weight: normal;
          line-height: 1.45;
          text-align: left;
          color: ${RICH_GRAY_90};
          background-color: ${RICH_GRAY_30};
          border-radius: 4px;

          &-additional {
            display: flex;
            font-size: 11px;
            font-weight: normal;
            line-height: 1.45;
            text-align: left;
            color: ${ROYAL_BLUE_70};
          }
        }
      }
    }
  }
`

export const popoverStyles = () => css`
  .joe-engagement-card-popover {
    width: 432px;
    height: 364px;
    border-radius: 8px;
    box-shadow: ${POPOVER_SHADOW};
    background-color: #fff;
  }
`
