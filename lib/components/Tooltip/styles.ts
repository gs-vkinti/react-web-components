import { css } from '@emotion/react'

import { FONT_FAMILY } from '../../styles/typography'
import { RICH_GRAY_0, RICH_GRAY_90 } from '../../styles/colors'

export const styles = css`
  color: ${RICH_GRAY_0};
  padding: 3px 8px 5px 8px;
  text-align: center;
  border-radius: 4px;
  background-color: ${RICH_GRAY_90};
  font-family: ${FONT_FAMILY};
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: normal;

  .tippy-content {
    padding: 0;
  }

  .tippy-arrow {
    width: 16px;
    height: 16px;
  }

  .tippy-arrow:before {
    content: '';
    position: absolute;
    border-style: solid;
  }

  .tippy-box[data-placement^='bottom'] > .tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom;
  }

  .tippy-box[data-placement^='top'] > .tippy-arrow::before {
    color: ${RICH_GRAY_90};
  }

  &[data-placement^='right'] > .tippy-arrow::before {
    color: ${RICH_GRAY_90};
  }

  &[data-placement^='bottom'] > .tippy-arrow::before {
    color: ${RICH_GRAY_90};
  }

  &[data-placement^='left'] > .tippy-arrow::before {
    color: ${RICH_GRAY_90};
  }
`
