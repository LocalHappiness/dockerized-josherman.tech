export default function CryptoGallery () {
  const arrayOfCrypto = [
    { name: 'BITCOIN', bgcolor: 'bg-orange-500', txcolor: 'hover:text-orange-500', address: '34CJekTFQh5wSu7e3SAMYZVHkmU3J3TG7m', src: '/crypto/bitcoin.png' },
    { name: 'ETHERIUM', bgcolor: 'bg-green-500', txcolor: 'hover:text-green-500', address: '0x5c861C46131a6b5e8bBE62AC0758bABC0102965B', src: '/crypto/etherium.png' },
    { name: 'LTC', bgcolor: 'bg-blue-500', txcolor: 'hover:text-blue-500', address: 'MVKCEJEXrkU7TPqZkP59RUWdGX923JdJWP', src: '/crypto/ltc.png' },
    { name: 'CKB', bgcolor: 'bg-indigo-500', txcolor: 'hover:text-indigo-500', address: 'ckb1qyqwc7lt4896g4rkk730qlnefxpc7dqtutdsgqcfp3', src: '/crypto/ckb.png' },
    { name: 'DOGE', bgcolor: 'bg-yellow-500', txcolor: 'hover:text-yellow-500', address: 'DGs4Nk41pZoyym1hZAueMdHv27mEg454dS', src: '/crypto/doge.png' }
  ]

  return (
    <>
      <html translate='no'>
        <body>
          {/* HEADER */}
          <div className='flex-grow bg-gray-700'>
            <h1 className='text-white text-center font-extrabold text-4xl'>
          JOSH'S CRYPTO ADDRESSES
            </h1>
          </div>
          <div className='h-full w-full flex flex-wrap items-center justify-center origin-center bg-gray-900'>
            {/* CRYPTO CARDS */}
            {arrayOfCrypto.map((crypto) => (
              <div key={crypto.name} className='flex-no-wrap flex-grow max-w-sm py-1'>
                <div className={'flex-shrink-0 m-6 relative rounded-lg shadow-lg border-gray-700 border-8 overflow-hidden ' + crypto.bgcolor}>
                  <div className='relative text-white text-center font-extrabold text-4xl bg-gray-700 justify-center items-center '>
                    <span className='block -mb-1' translate='no'>{crypto.name}</span>
                  </div>
                  <div className='relative py-2 px-14 flex items-center justify-center'>
                    <div className='bg-white p-2'>
                      <img className='relative w-48' src={crypto.src} alt='' />
                    </div>
                  </div>
                  <div className='relative text-white'>
                    <div className='flex text-center'>
                      <span className='bg-gray-700 text-white text-xs font-bold w-full h-6 leading-none flex justify-center items-center pt-2' translate='no'>
                        {crypto.address}
                      </span>
                    </div>
                    <div className='flex text-center'>
                      <button
                        className={'bg-gray-700 text-white focus:outline-none text-xs font-bold w-full h-8 leading-none flex justify-center items-center pt-2 ' + crypto.txcolor}
                        onClick={() => {
                          navigator.clipboard.writeText(crypto.address)
                          alert(`${crypto.name} ${crypto.address} copied`)
                        }}
                      >
                      COPY TO CLIPBOARD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </body>
      </html>
    </>
  )
}
