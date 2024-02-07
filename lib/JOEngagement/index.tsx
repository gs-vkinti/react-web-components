// @ts-ignore
import styles from './jo-engagement.scss?inline'

import { useMemo, useState, useRef, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import { getMockEngagements } from './utils'
import { EngagementOb } from './JOEngagement.types'
import { RICH_GRAY_0, RICH_GRAY_40, ROYAL_BLUE_70 } from '../styles/colors'

import Header from './Header'
import EngagementPreview from './EngagementPreview'
import EngagementsListView from './EngagementsListView'

interface JOEngagementProps {
  container: any
  subscriptionId: string
  cancelAction: () => void
}

export default function JOEngagement({ container, ...props }: JOEngagementProps) {
  console.log('JOEngagement props', props)
  const containerRef = useRef<HTMLDivElement>(null)

  const [previewSelectedEngagement, setPreviewSelectedEngagement] = useState<EngagementOb | null>(null)
  const [selectedEngagement, setSelectedEngagement] = useState<EngagementOb | null>(null)
  const [engagementsList, setEngagementsList] = useState<EngagementOb[]>([])
  const [loadingEngagementsList, setLoadingEngagementsList] = useState<boolean>(false)

  useEffect(() => {
    setLoadingEngagementsList(true)
    setEngagementsList(getMockEngagements())
    setLoadingEngagementsList(false)
  }, [])

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

  const PX_JO: any = document.getElementById('px-jo')

  useEffect(() => {
    console.log('attribute subscriptionId changed', PX_JO?.data?.subscriptionId)
  }, [PX_JO?.data?.subscriptionId])

  useEffect(() => {
    console.log('attribute name changed', PX_JO?.data?.name)
  }, [PX_JO?.data?.name])

  const onClose = () => {
    PX_JO?.onClose?.()
    props.cancelAction?.()
  }

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={horizonTheme}>
        <style type='text/css'>{styles}</style>
        <div>subscription Id: {props.subscriptionId}</div>
        <div>PX_JO data Id: {PX_JO?.data?.subscriptionId}</div>

        <div className='px-jo-engagements' ref={containerRef}>
          <Header onClose={onClose} />

          <div className='px-jo-engagements__body'>
            {!previewSelectedEngagement ? (
              <EngagementsListView
                engagementsList={engagementsList}
                selectedEngagement={selectedEngagement}
                setSelectedEngagement={setSelectedEngagement}
                loadingEngagementsList={loadingEngagementsList}
                setPreviewSelectedEngagement={setPreviewSelectedEngagement}
              />
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
