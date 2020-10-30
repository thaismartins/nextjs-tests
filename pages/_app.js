import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ContentMain } from '../styles/global'

import {
  isSupported,
  registerServiceWorker,
  getCurrentSubscription,
  requestSubscription,
} from '../services/pushNotification.js'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    async function checkSubscription() {
      const isPushNotificationSupported = await isSupported()

      if (isPushNotificationSupported) {
        await registerServiceWorker()
        const existingSubscription = await getCurrentSubscription()
        console.log('existingSubscription', existingSubscription)
        if (!existingSubscription) await requestSubscription()
      }
    }

    checkSubscription()
  }, [])

  return (
    <>
      <Header />
      <ContentMain>
        <Component {...pageProps} />
      </ContentMain>
      <Footer />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
