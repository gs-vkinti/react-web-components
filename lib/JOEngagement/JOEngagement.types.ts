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
}

export interface FilterDropdownProps extends FilterTypeOb {
  index: number
}

export interface FilterTypeOb {
  label: string
  itemKey: string
  options: ProductOption[] | ChannelOption[] | EngagementTypeOption[] | LabelOption[] | EnvironmentOption[]
}
