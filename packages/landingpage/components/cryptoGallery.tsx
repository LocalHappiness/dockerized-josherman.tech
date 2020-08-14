export default function CryptoGallery () {
  return (
    <>
      <body className='bg-gray-900'>
        <div className='h-full w-full flex flex-wrap items-center justify-center origin-center'>
          {/* BITCOIN */}
          <div className='flex-shrink-0 m-6 relative bg-orange-500 rounded-lg max-w-m shadow-lg border-gray-700 border-8'>
            <div className='relative text-white text-center text-4xl px-6 pb-2 mt-2 bg-gray-700'>
              <span className='block -mb-1'>BITCOIN</span>
            </div>
            <div className='relative py-2 px-10 flex items-center justify-center'>
              <div className='bg-white p-2'>
                <img className='relative w-120' src='/crypto/bitcoin.png' alt='' />
              </div>
            </div>
            <div className='relative text-white px-8 pb-6 mt-6'>
              <div className='flex justify-between'>
                <span className='block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                34CJekTFQh5wSu7e3SAMYZVHkmU3J3TG7m
                </span>
              </div>
            </div>
          </div>
          {/* ETHERIUM */}
          <div className='flex-shrink-0 m-6 relative bg-green-500 rounded-lg max-w-m shadow-lg border-gray-700 border-8'>
            <div className='relative text-white text-center text-4xl px-6 pb-1 mt-2 bg-gray-700'>
              <span className='block -mb-1'>ETHERIUM</span>
            </div>
            <div className='relative py-2 flex items-center justify-center bg-green-500'>
              <div className='bg-white p-2'>
                <img className='relative w-120' src='/crypto/etherium.png' alt='' />
              </div>
            </div>
            <div className='relative text-white px-6 pb-6 mt-6'>
              <div className='flex justify-between'>
                <span className='block bg-white rounded-full text-green-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
              0x2a3dfbc1893f583692aabcfd53a83242aef85b36
                </span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}
