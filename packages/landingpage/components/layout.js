import Header from './header'
import Footer from './footer'
import Head from 'next/head'

function Layout (props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <link rel='icon' type='image/x-icon' href='favicon.ico' />
        <title>Joshua Herman</title>
      </Head>
      <Header />
      <main className='flex-1 w-full max-w-6xl p-4 mx-auto md:px-8 md:py-8'>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
