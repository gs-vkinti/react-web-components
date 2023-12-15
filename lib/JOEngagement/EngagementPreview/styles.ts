import { css } from '@emotion/react'

import { RICH_GRAY_20, RICH_GRAY_40, RICH_GRAY_60, RICH_GRAY_70 } from '../../styles/colors'

export const styles = () => css`
  .joe-preview {
    .joe-title-bar {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 12px 0;
      gap: 8px;
      border-bottom: 1px solid ${RICH_GRAY_40};
      &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        line-height: 1.5;
        &__title {
          font-size: 16px;
          font-weight: 600;
        }
        &__description {
          overflow: hidden;
          color: ${RICH_GRAY_60};
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 400;
        }
      }
      &__back-icon {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
    &__content {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: center;

      &__config {
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        gap: 16px;
        &__title {
          font-size: 16px;
          font-weight: 600;
        }
        &__row {
          display: flex;
          justify-content: flex-start;
          gap: 48px;
        }
        &__field {
          display: flex;
          flex-direction: column;

          &__name {
            font-size: 14px;
            font-weight: 600;
          }
          &__value {
            color: ${RICH_GRAY_70};
            font-size: 14px;
            font-weight: 400;
          }
        }
      }

      &__slides {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        &__image {
          width: 55vw;
          height: 40vh;
          border-radius: 4px;
          border: 1px solid ${RICH_GRAY_40};
          background: ${RICH_GRAY_20};
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`
