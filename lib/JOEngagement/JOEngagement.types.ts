export interface DropdownOption {
  label: string
  value: string
}

export interface ProductOption extends DropdownOption {}
export interface ChannelOption extends DropdownOption {}
export interface EngagementTypeOption extends DropdownOption {}
export interface LabelOption extends DropdownOption {}
export interface EnvironmentOption extends DropdownOption {}

export interface FilterOptions {
  products: ProductOption[]
  channels: ChannelOption[]
  engagementTypes: EngagementTypeOption[]
  labels: LabelOption[]
  environments: EnvironmentOption[]
}

export interface FiltersBarProps {
  filterOptions: FilterOptions
  selectedFilters: SelectedFilters
  setSelectedFilters: (v: SelectedFilters) => void
}

export interface FilterDropdownProps extends FilterTypeOb {
  index: number
  itemKey: string
  label: string
  options: DropdownOption[]
  selectedItems: string[]
  setSelectedItems: (v: string[]) => void
}

export interface FilterTypeOb {
  label: string
  itemKey: string
  options: ProductOption[] | ChannelOption[] | EngagementTypeOption[] | LabelOption[] | EnvironmentOption[]
}

export interface EngagementCardProps {
  type: string
  name: string
  environments: string[]
  labels: string[]
  image: string
}

export interface SortTypeOption {
  label: string
  value: string
}

export interface EngagementsListProps {
  openFilterBar: boolean
}

export interface SelectedFilters {
  products: string[]
  channels: string[]
  engagementTypes: string[]
  labels: string[]
  environments: string[]
}
