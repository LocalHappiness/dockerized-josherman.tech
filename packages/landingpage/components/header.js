import Link from 'next/link'
import { useState } from 'react'

function Header () {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header>
      <div className='flex flex-wrap flex-col md:flex-row md:flex-no-wrap items-center md:justify-center max-w-4xl mx-auto md:p-1'>
        <div className='items-center'>
          <Link href='/'>
            <img
              src='logos/logo.svg'
              className='fill-current w-24 h-24'
            />
          </Link>
        </div>
        <button
          className='block md:hidden border border-black px-2 py-2 rounded text-black outline-none'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className='fill-current h-5 w-5'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
            fill='#ffa500'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>

        <ul
          className={`${
            isExpanded ? 'block' : 'hidden'
          } md:flex md:flex-row md:items-center md:justify-center md:w-auto md:text-lg flex-col text-md w-full text-center`}
        >
          {[
            { title: 'Home', route: '/' },
            { title: 'About', route: '/about' },
            { title: 'Certifications', route: '/certs' }

          ].map(navigationItem => (
            <li className='md:mt-0 md:ml-6' key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className='block text-black hover:text-orange-600'>{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
