import { products, channels, engagementTypes, labels, environments } from './mock'

import { FilterOptions, FilterTypeOb, SelectedFilters } from './JOEngagement.types'
import { filterTypes } from './const'

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
  return filterTypes.map(filterType => ({
    ...filterType,
    options: filterOptions[filterType.itemKey as keyof FilterOptions]
  }))
}

export const getDefaultFilters = (): SelectedFilters => {
  return {
    products: [],
    channels: [],
    engagementTypes: [],
    labels: [],
    environments: []
  }
}
