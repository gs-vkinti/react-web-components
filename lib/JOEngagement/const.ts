import { FilterTypeOb, SortTypeOption } from './JOEngagement.types'

export const sortTypes: SortTypeOption[] = [
  {
    label: 'Alphabetical Order',
    value: 'alphabetical_order'
  },
  {
    label: 'Recently Used',
    value: 'recently_used'
  },
  {
    label: 'Last Updated',
    value: 'last_updated'
  },
  {
    label: 'Created Date',
    value: 'created_date'
  }
]

export const filterTypes: FilterTypeOb[] = [
  {
    label: 'product',
    itemKey: 'products',
    options: []
  },
  {
    label: 'Channel',
    itemKey: 'channels',
    options: []
  },
  {
    label: 'Engagement Type',
    itemKey: 'engagementTypes',
    options: []
  },
  {
    label: 'Labels',
    itemKey: 'labels',
    options: []
  },
  {
    label: 'Environment',
    itemKey: 'environments',
    options: []
  }
]
