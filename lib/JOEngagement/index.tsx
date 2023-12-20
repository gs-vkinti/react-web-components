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
import EngagementPreview from './EngagementPreview'
import { SelectedFilters, EngagementOb } from './JOEngagement.types'
import { RICH_GRAY_0, RICH_GRAY_40, ROYAL_BLUE_70 } from '../styles/colors'
import { createColors } from 'vitest/utils.js'

interface JOEngagementProps {
  container: any
  subscriptionId: string
  cancelAction: () => void
}

export default function JOEngagement({ container, ...props }: JOEngagementProps) {
  console.log('JOEngagement props', props)
  const containerRef = useRef<HTMLDivElement>(null)
  const [searchText, setSearchText] = useState<string>('')
  const [previewSelectedEngagement, setPreviewSelectedEngagement] = useState<EngagementOb | null>(null)
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
    typography: {
      fontFamily: 'Noto Sans, sans-serif',
      fontSize: 14,
      fontWeightMedium: 600
    },
    palette: {
      primary: {
        main: ROYAL_BLUE_70
      }
    },
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
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            borderRadius: 100,
            padding: '4px 20px',
            textTransform: 'none',
            lineHeight: 1.5,
            borderColor: RICH_GRAY_40,
            '&:hover': {
              backgroundColor: ownerState.variant === 'outlined' ? RICH_GRAY_0 : ROYAL_BLUE_70,
              borderColor: RICH_GRAY_40
            }
          })
        },
        defaultProps: {
          disableRipple: true,
          disableFocusRipple: true,
          disableElevation: true,
          disableTouchRipple: true
        }
      }
    }
  })

  const showEngagementListView = () => {
    setPreviewSelectedEngagement(null)
  }

  const showEngagementPreview = (id: string) => {
    const engagement = engagementsList.find(v => v.id === id) || null
    setPreviewSelectedEngagement(engagement)
  }

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={horizonTheme}>
        <style type='text/css'>{styles}</style>
        <div className='px-jo-engagements' ref={containerRef}>
          <Header onClose={props.cancelAction} />

          <div className='px-jo-engagements__body'>
            {!previewSelectedEngagement ? (
              <>
                <TitleBar
                  engagementCount={engagementsList.length}
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
                  selectedEngagement={selectedEngagement}
                  setSelectedEngagement={setSelectedEngagement}
                  engagementsList={engagementsList}
                  loadingEngagementsList={loadingEngagementsList}
                  openPreview={showEngagementPreview}
                />
              </>
            ) : (
              <EngagementPreview
                engagement={previewSelectedEngagement}
                exitPreview={showEngagementListView}
                selectEngagement={() => {
                  setSelectedEngagement(previewSelectedEngagement)
                  showEngagementListView()
                }}
              />
            )}
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  )
}
