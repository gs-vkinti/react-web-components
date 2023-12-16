// @ts-ignore
import styles from './jo-engagement.scss?inline'

import { useMemo, useState, useRef } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import isEqual from 'lodash/isEqual'

import { getDefaultFilters, getFilterOptions } from './utils'

import Header from './Header'
import TitleBar from './TitleBar'
import Filters from './Filters'
import EngagementsList from './EngagementsList'
import { SelectedFilters } from './JOEngagement.types'

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

  const isFiltersApplied = useMemo(() => {
    return !isEqual(getDefaultFilters(), selectedFilters)
  }, [selectedFilters])

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
              engagementCount={100}
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

            <EngagementsList openFilterBar={openFilterBar} />
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  )
}
