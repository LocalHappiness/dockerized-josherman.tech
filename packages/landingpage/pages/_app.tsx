import React from 'react'
import { AppProps } from 'next/app'

import '../css/index.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App