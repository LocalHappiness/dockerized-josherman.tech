function Footer () {
  return (
    <footer className='bg-white'>
      <ul className='flex items-center justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm text-black'>
        <li>
                    Created by:{' '}
          <a href='https://www.joshuaherman.tech' target='_blank' className='font-bold'>
                        Joshua Herman
          </a>
        </li>

        <li>
          <a
            href='https://github.com/LocalHappiness'
            target='_blank'
            className='font-bold'
          >
            <img src='logos/GitHub.svg' className='w-8 h-8' />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
