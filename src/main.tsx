import r2wc from '@r2wc/react-to-web-component'

import JOEngagement from '../lib'

window.customElements.get('px-jo-engagement') ||
  window.customElements.define(
    'px-jo-engagement',
    r2wc(JOEngagement, {
      props: {
        subscriptionId: 'string',
        cancelAction: 'function'
      },
      shadow: 'open'
    } as object)
  )
