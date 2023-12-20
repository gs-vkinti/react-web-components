import { css } from '@emotion/react'
import { RICH_GRAY_20, RICH_GRAY_40, RICH_GRAY_60 } from '../styles/colors'

const styles = () => {
  return css`
    .joe-hover-card {
      display: flex;
      width: fit-content;
      padding: 16px 24px;
      flex-direction: column;
      align-items: flex-start;
      flex-shrink: 0;
      border-radius: 4px;
      box-shadow: 0px 16px 32px 0px rgba(25, 35, 47, 0.12), 0px 0px 2px 0px rgba(25, 35, 47, 0.24);
      font-weight: 600;
      line-height: 24px;

      &__title {
        font-size: 18px;
      }
      &--image {
        margin: 16px;
        border-radius: 4px 4px 0px 0px;
        border: 1px solid ${RICH_GRAY_40};
        background: ${RICH_GRAY_20};
        width: 368px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        > img {
          display: block;
          height: 150px;
          width: 220px;
          border: 1px solid blueviolet;
        }
      }
      &--title {
        text-align: center;
        width: 368px;
        margin-bottom: 8px;
        font-size: 14px;
      }
      &--note {
        margin: 0 0 28px 16px;
        color: ${RICH_GRAY_60};
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        width: 368px;
        text-align: center;
      }
    }
  `
}
export default styles
