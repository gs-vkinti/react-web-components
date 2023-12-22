import { FC, useMemo, useState } from 'react'
import isEqual from 'lodash/isEqual'

import { getDefaultFilters, getFilterOptions } from '../utils'
import { EngagementsListViewProps, SelectedFilters } from '../JOEngagement.types'

import TitleBar from '../TitleBar'
import Filters from '../Filters'
import EngagementsList from '../EngagementsList'

const EngagementsListView: FC<EngagementsListViewProps> = props => {
  const [searchText, setSearchText] = useState<string>('')
  const [openFilterBar, setOpenFilterBar] = useState<boolean>(true)
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(getDefaultFilters())
  const [sortType, setSortType] = useState<string>('')

  const isFiltersApplied = useMemo(() => {
    return !isEqual(getDefaultFilters(), selectedFilters)
  }, [selectedFilters])

  return (
    <>
      <TitleBar
        engagementCount={props.engagementsList.length}
        searchText={searchText}
        setSearchText={setSearchText}
        isSearching={false}
        sortType={sortType}
        setSortType={setSortType}
        openFilterBar={openFilterBar}
        setOpenFilterBar={setOpenFilterBar}
        isFiltersApplied={isFiltersApplied}
      />

      {openFilterBar && (
        <Filters
          filterOptions={getFilterOptions()}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      )}

      <EngagementsList
        openFilterBar={openFilterBar}
        selectedEngagement={props.selectedEngagement}
        setSelectedEngagement={props.setSelectedEngagement}
        engagementsList={props.engagementsList}
        loadingEngagementsList={props.loadingEngagementsList}
        openPreview={props.setPreviewSelectedEngagement}
      />
    </>
  )
}

export default EngagementsListView
