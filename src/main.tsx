import r2wc from '@r2wc/react-to-web-component'

import { JOEngagement, JOEHoverCard } from '../lib'

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

window.customElements.get('px-joe-hover-card') ||
  window.customElements.define(
    'px-joe-hover-card',
    r2wc(JOEHoverCard, {
      props: {
        title: 'string',
        image: 'string'
      },
      shadow: 'open'
    } as object)
  )
