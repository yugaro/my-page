import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { store } from '@/store'
import { usePageView } from '@/hooks/usePageView'
import { GoogleTagManager } from '@/utils/GoogleTagManager'
import { isErrorPage, isMaintenanceCheckPage } from '@/utils/page'
import '@/styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const googleTagManagerId =
    process.env.NEXT_PUBLIC_MAGAZINE_GOOGLE_TAG_MANAGER_ID || ''

  usePageView()

  return (
    <>
      <Head>
        <title>Yuga Onoue 尾上悠雅 website</title>
        <meta name='keywords' content='Yuga Onoue, 尾上悠雅' />
        <meta name='description' content='Yuga Onoue 尾上悠雅 website.' />
        <meta property='og:title' content='Yuga Onoue 尾上悠雅 website' />
      </Head>
      <GoogleTagManager googleTagManagerId={googleTagManagerId} />

      {isErrorPage(router) || isMaintenanceCheckPage(router) ? (
        <Component {...pageProps} />
      ) : (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )}
    </>
  )
}

export default App
