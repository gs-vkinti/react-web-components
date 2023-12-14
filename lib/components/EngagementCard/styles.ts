import { css } from '@emotion/react'

import {
  RICH_GRAY_90,
  RICH_GRAY_30,
  RICH_GRAY_10,
  RICH_GRAY_60,
  BELL_BLUE_40,
  BELL_BLUE_20
} from '../../styles/colors'

export const styles = () => css`
  .joe-engagement-card {
    width: 368px;
    height: 288px;
    border: solid 1px ${RICH_GRAY_30};
    cursor: pointer;

    &__view {
      height: 180px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${RICH_GRAY_10};
      border-bottom: solid 1px ${RICH_GRAY_30};

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
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          padding: 0 6px;

          font-size: 11px;
          font-weight: normal;
          line-height: 1.45;
          letter-spacing: normal;
          text-align: left;
          color: ${RICH_GRAY_90};
          background-color: ${RICH_GRAY_30};
          border-radius: 4px;
        }
      }
    }
  }
`
