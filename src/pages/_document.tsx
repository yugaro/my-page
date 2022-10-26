import Document, { Head, Html, Main, NextScript } from 'next/document'

import { gaMeasurementId } from '@/utils/gtag'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={'ja'} dir={'ltr'}>
        <Head>
          {gaMeasurementId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${gaMeasurementId}', {
                     page_path: window.location.pathname,
                   });`,
                }}
              />
            </>
          )}
          {/* <meta name="keywords" content="Yuga Onoue, 尾上悠雅" />
          <meta name="description" content="Yuga Onoue 尾上悠雅 website."/>
          <meta property="og:title" content="Yuga Onoue 尾上悠雅 website" /> */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
