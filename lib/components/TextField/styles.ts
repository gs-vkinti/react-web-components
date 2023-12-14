import { css } from '@emotion/react'

import * as colors from '../../styles/colors'

import { TextFieldProps } from './TextField.types'

export const styles = (props: TextFieldProps) => css`
  .joe-textfield {
    width: 100%;
    max-width: 312px;
    display: ${props.orientation === 'horizontal' ? 'flex' : 'block'};
    align-content: center;
    align-items: center;
    justify-content: space-between;
    margin-top: ${props.marginTop || 0}px;

    &__label {
      color: #4b6a87;
      font-size: 12px;
      letter-spacing: 0;
      line-height: 16px;
      margin-bottom: 4px;
      white-space: nowrap;

      &--required {
        color: ${colors.TART_RED_70};
      }
    }

    &__wrap {
      display: flex;
      align-items: center;
      background-color: ${props.inputBGColor ? props.inputBGColor : colors.RICH_GRAY_0};

      width: ${props.inputWidth ? props.inputWidth : '100%'};
      height: ${props.inputHeight ? props.inputHeight : '30px'};
      overflow: hidden;
      border-radius: ${props.borderRadius ? props.borderRadius : '4px'};
      border: 1px solid ${colors.GRAY_TERTIARY_LIGHTER};

      &:hover {
        border-color: ${colors.ROYAL_BLUE_70};
      }

      > input {
        height: 30px;
        border: none;
        outline: none;
        padding: 0 12px;
        font-size: 14px;
        letter-spacing: 0;
        width: calc(100% - 24px);
        color: ${props.inputColor ? props.inputColor : colors.RICH_GRAY_90};
        caret-color: ${colors.RICH_GRAY_90};
        background-color: transparent;

        &::placeholder {
          font-size: 14px;
          letter-spacing: normal;
          color: ${colors.RICH_GRAY_50};
        }
      }

      &--focus {
        border-color: ${colors.ROYAL_BLUE_70};
      }

      &--error {
        border: 1px solid ${colors.TART_RED_60};

        &:hover,
        &.gpx-textfield__wrap--focus {
          border-color: ${colors.TART_RED_60};
        }
      }

      &--disabled {
        background-color: ${colors.RICH_GRAY_10};

        &:hover,
        &.gpx-textfield__wrap--focus {
          border-color: ${colors.GRAY_TERTIARY_LIGHTER};
        }

        > input {
          color: ${colors.RICH_GRAY_50};
        }
      }

      &--view-only {
        > input {
          color: ${colors.RICH_GRAY_90};

          &:hover,
          &.gpx-textfield__wrap--focus {
            border-color: ${colors.GRAY_TERTIARY_LIGHTER};
          }
        }
      }

      &--withStartIcon {
        > input {
          padding: 0 12px 0 8px;
        }
      }

      &--withEndIcon {
        > input {
          padding: 0 8px 0 12px;
        }
      }
    }

    &__start-icon,
    &__end-icon {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    &__start-icon {
      padding-left: 3px;
    }

    &__end-icon {
      padding-right: 3px;
    }

    &__error {
      margin-top: 4px;
      font-size: 12px;
      letter-spacing: 0;
      color: ${colors.TART_RED_60};
    }
  }
`
