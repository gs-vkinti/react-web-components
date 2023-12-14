import { products, channels, engagementTypes, labels, environments } from './mock'

import { FilterOptions, FilterTypeOb } from './JOEngagement.types'

export const getFilterOptions = (): FilterOptions => {
  return {
    products: products.map(i => ({ label: i.name, value: i.id })),
    channels,
    engagementTypes,
    labels,
    environments
  }
}

export const getFilterDropdownsList = ({
  filterOptions
}: {
  filterOptions: FilterOptions
}): FilterTypeOb[] => {
  let filterTypes = [
    {
      label: 'product',
      itemKey: 'products'
    },
    {
      label: 'Channel',
      itemKey: 'channels'
    },
    {
      label: 'Engagement Type',
      itemKey: 'engagementTypes'
    },
    {
      label: 'Labels',
      itemKey: 'labels'
    },
    {
      label: 'Environment',
      itemKey: 'environments'
    }
  ]

  filterTypes = filterTypes.map(filterType => ({
    ...filterType,
    options: filterOptions[filterType.itemKey as keyof FilterOptions]
  }))

  return filterTypes as FilterTypeOb[]
}
