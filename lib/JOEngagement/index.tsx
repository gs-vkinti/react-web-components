// @ts-ignore
import styles from './jo-engagement.scss?inline'

import { useMemo, useState, useRef, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import isEqual from 'lodash/isEqual'

import { getDefaultFilters, getFilterOptions, getMockEngagements } from './utils'

import Header from './Header'
import TitleBar from './TitleBar'
import Filters from './Filters'
import EngagementsList from './EngagementsList'
import { SelectedFilters, EngagementOb } from './JOEngagement.types'

interface JOEngagementProps {
  container: any
  subscriptionId: string
  cancelAction: () => void
}

export default function JOEngagement({ container, ...props }: JOEngagementProps) {
  console.log('JOEngagement props', props)
  const containerRef = useRef<HTMLDivElement>(null)
  const [searchText, setSearchText] = useState<string>('')
  const [sortType, setSortType] = useState<string>('')
  const [openFilterBar, setOpenFilterBar] = useState<boolean>(true)
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(getDefaultFilters())

  const [selectedEngagement, setSelectedEngagement] = useState<EngagementOb | null>(null)
  const [engagementsList, setEngagementsList] = useState<EngagementOb[]>([])

  const [loadingEngagementsList, setLoadingEngagementsList] = useState<boolean>(false)

  useEffect(() => {
    setLoadingEngagementsList(true)
    setEngagementsList(getMockEngagements())
    setLoadingEngagementsList(false)
  }, [])

  const isFiltersApplied = useMemo(() => {
    return !isEqual(getDefaultFilters(), selectedFilters)
  }, [selectedFilters])

  const searchedEngagements = useMemo(() => {
    const search = searchText.toLowerCase()
    return !search
      ? engagementsList
      : engagementsList.filter(e => {
          const name = e.name.toLowerCase()
          return name.includes(search)
        })
  }, [engagementsList, searchText])

  //Todo: update when we get more specific data about engagement object
  const filteredEngagements = useMemo(() => {
    if (!isFiltersApplied) return searchedEngagements
    console.log({ selectedFilters })
    return searchedEngagements.filter(engagement => {
      let result = true
      if (selectedFilters.products.length)
        result =
          result &&
          !!selectedFilters.products.find(
            product => product.toLowerCase() === engagement.product.toLowerCase()
          )
      if (selectedFilters.channels.length)
        result =
          result &&
          !!selectedFilters.channels.find(
            channel => channel.toLowerCase() === engagement.channel.toLowerCase()
          )
      if (selectedFilters.engagementTypes.length)
        result =
          result &&
          !!selectedFilters.engagementTypes.find(type => type.toLowerCase() === engagement.type.toLowerCase())
      if (selectedFilters.labels.length)
        result =
          result &&
          !!selectedFilters.labels.find(label =>
            engagement.labels.find(l => l.toLowerCase() === label.toLowerCase())
          )
      if (selectedFilters.environments.length)
        result =
          result &&
          !!selectedFilters.environments.find(environment =>
            engagement.environments.find(env => env.toLowerCase() === environment.toLowerCase())
          )
      return result
    })
  }, [isFiltersApplied, selectedFilters, searchedEngagements])

  const cache = useMemo(
    () =>
      createCache({
        key: 'css',
        prepend: true,
        container
      }),
    [container]
  )

  const horizonTheme = createTheme({
    components: {
      MuiPopover: {
        defaultProps: {
          container: () => containerRef.current
        }
      },
      MuiPopper: {
        defaultProps: {
          container: () => containerRef.current
        }
      },
      MuiModal: {
        defaultProps: {
          container: () => containerRef.current
        }
      }
    }
  })

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={horizonTheme}>
        <style type='text/css'>{styles}</style>
        <div className='px-jo-engagements' ref={containerRef}>
          <Header onClose={props.cancelAction} />

          <div className='px-jo-engagements__body'>
            <TitleBar
              engagementCount={engagementsList.length}
              searchText={searchText}
              setSearchText={setSearchText}
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
              selectedEngagement={selectedEngagement}
              setSelectedEngagement={setSelectedEngagement}
              engagementsList={filteredEngagements}
              loadingEngagementsList={loadingEngagementsList}
            />
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  )
}
