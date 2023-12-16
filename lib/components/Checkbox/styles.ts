import { css } from '@emotion/react'

import { RICH_GRAY_90 } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/typography'
import { CheckboxProps } from './'

export default (props: CheckboxProps) => css`
  .jeo-checkbox {
    display: flex;
    align-items: center;
    font-family: ${FONT_FAMILY};

    .MuiCheckbox-root {
      width: 32px;
      padding: 4px;
    }

    &__checked {
      .MuiFormControlLabel-label {
        font-weight: 600;
      }
    }

    .MuiFormControlLabel-root {
      margin: 0;
    }

    .MuiFormControlLabel-label {
      color: ${RICH_GRAY_90};
      font-size: 14px;
      line-height: 1.71;
      margin-left: 4px;
    }

    .MuiIconButton-root {
      padding: ${props.disableRipple ? '0 12px 0 0' : '9px'};
      color: ${props.disableRipple ? 'initial' : 'initial'};

      &:hover {
        background-color: initial;
      }
    }
  }
`
