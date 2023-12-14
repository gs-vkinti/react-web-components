import { css } from '@emotion/react'

export const styles = () => css`
  .joe-engagements-list {
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

    overflow: scroll;
    height: calc(100vh - 208px); // TODO: we need to subtract if filter bar not open
  }
`
