import { css } from '@emotion/react'
import { RICH_GRAY_20, RICH_GRAY_40, RICH_GRAY_60 } from '../styles/colors'
import { IMAGE_SHADOW } from '../styles/typography'

const styles = () => {
  return css`
    .joe-hover-card {
      display: flex;
      width: 456px;
      padding: 16px 24px 28px 24px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      border-radius: 4px;
      box-shadow: 0px 16px 32px 0px rgba(25, 35, 47, 0.12), 0px 0px 2px 0px rgba(25, 35, 47, 0.24);
      font-weight: 600;
      line-height: 24px;
      &__body {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }
      &__title {
        font-size: 18px;
        padding: 8px;
      }
      &--image {
        border-radius: 4px 4px 0px 0px;
        border: 1px solid ${RICH_GRAY_40};
        background: ${RICH_GRAY_20};
        width: 368px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          display: block;
          box-shadow: ${IMAGE_SHADOW};
        }
      }
      &__skeleton {
        margin: 16px 0 8px 0;
        width: 222px;
        height: 146px;
      }
      &--title {
        text-align: center;
        width: 368px;
        font-size: 14px;
        margin-top: 8px;
      }
      &--note {
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
