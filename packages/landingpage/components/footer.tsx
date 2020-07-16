function Footer () {
  return (
    <footer className='flex flex-col w-full justify-evenly md:flex-row flex-no-wrap mx-auto p-2 md:p-4'>
      <div>
        <ul className='text-sm text-black'>
          <li>
          Created by:{' '}
            <a href='https://www.joshuaherman.tech' target='_blank' rel='noopener noreferrer' className='font-bold'>
          Joshua Herman
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a
          href='https://github.com/LocalHappiness'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='logos/GitHub.svg' className='w-8 h-8' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
