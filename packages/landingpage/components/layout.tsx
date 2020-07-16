import Header from './header'
import Footer from './footer'
import Head from 'next/head'

function Layout (props) {
  return (
    <>
      <div>
        <Head>
          <link rel='icon' type='image/x-icon' href='favicon.ico' />
          <title>Joshua Herman</title>
        </Head>
        <Header />
        <main className='flex-1 w-full max-w-6xl p-1 mx-auto md:px-8 md:py-2'>
          {props.children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
