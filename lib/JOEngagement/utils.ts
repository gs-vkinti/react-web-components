import range from 'lodash/range'
import random from 'lodash/random'
import uniqueId from 'lodash/uniqueId'

import { products, channels, engagementTypes, labels, environments, engagementTypeImages } from './mock'

import { FilterOptions, FilterTypeOb, SelectedFilters, EngagementOb } from './JOEngagement.types'
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

export const getMockEngagements = (): EngagementOb[] => {
  const labelsList = labels.map(i => i.label)
  const engagementTypeLabels = engagementTypes.map(i => i.value)
  const channelLabels = channels.map(i => i.label)
  const environmentLabels = environments.map(i => i.label)
  const productLabels = products.map(i => i.name)

  const mockList: EngagementOb[] = []

  engagementTypeLabels.map(engagementType => {
    productLabels.map(productName => {
      range(3).map(i => {
        const engagementOb: EngagementOb = {
          id: uniqueId(),
          type: engagementType,
          name: `Engagement ${engagementType} - ${i + 1}`,
          labels: [...labelsList].slice(0, random(0, labelsList.length)),
          images: engagementTypeImages[engagementType],
          product: productName,
          channel: channelLabels[random(0, channelLabels.length - 1)],
          environments: [...environmentLabels].slice(0, random(0, environmentLabels.length))
        }

        mockList.push(engagementOb)
      })
    })
  })

  return mockList
}
