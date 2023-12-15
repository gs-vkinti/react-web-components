// @ts-ignore
import styles from './jo-engagement.scss?inline'
// @ts-ignore
import tippy_styles from 'tippy.js/dist/tippy.css?inline'

import { useMemo, useState, useRef } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import { getFilterOptions } from './utils'

import Header from './Header'
import TitleBar from './TitleBar'
import Filters from './Filters'
import EngagementsList from './EngagementsList'

interface JOEngagementProps {
  container: any
  subscriptionId: string
  cancelAction: () => void
}

export default function JOEngagement({ container, ...props }: JOEngagementProps) {
  console.log('JOEngagement props', props)
  const containerRef = useRef<HTMLDivElement>(null)
  const [searchText, setSearchText] = useState<string>('')

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
        <style type='text/css'>
          {styles}
          {tippy_styles}
        </style>
        <div className='px-jo-engagements' ref={containerRef}>
          <Header onClose={props.cancelAction} />

          <div className='px-jo-engagements__body'>
            <TitleBar
              engagementCount={100}
              searchText={searchText}
              setSearchText={setSearchText}
              isSearching={false}
            />
            <Filters filterOptions={getFilterOptions()} />

            <EngagementsList />
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  )
}
