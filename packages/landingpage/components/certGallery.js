import React, { useState } from 'react'

const Buttons = () => {
  const arrayOfCerts = [
    { name: 'CCNA: Enterprise Networking, Security, and Automation', cat: 'CCNA', src: '/certs/CCNA1.png' },
    { name: 'CCNA: Introduction to Networks', cat: 'CCNA', src: '/certs/CCNA2.png' },
    { name: 'CCNA: Routing and Switching Essentials', cat: 'CCNA', src: '/certs/CCNA3.png' },
    { name: 'TestOut: Client Pro', cat: 'TESTOUT', src: '/certs/TESTOUT1.png' },
    { name: 'TestOut: Linux Pro', cat: 'TESTOUT', src: '/certs/TESTOUT2.png' },
    { name: 'TestOut: Network Pro', cat: 'TESTOUT', src: '/certs/TESTOUT3.png' },
    { name: 'TestOut: PC Pro', cat: 'TESTOUT', src: '/certs/TESTOUT4.png' },
    { name: 'TestOut: Server Pro 2016: Identity', cat: 'TESTOUT', src: '/certs/TESTOUT5.png' },
    { name: 'TestOut: Server Pro 2016: Install and Storage', cat: 'TESTOUT', src: '/certs/TESTOUT6.png' },
    { name: 'TestOut: Server Pro 2016: Networking', cat: 'TESTOUT', src: '/certs/TESTOUT7.png' },
    { name: 'VMware: Network and Security Architecture', cat: 'VMWARE', src: '/certs/VMWARE1.png' },
    { name: 'RF Fundamentals: Antennas', cat: 'RADIO', src: '/certs/RF1.png' },
    { name: 'RF Fundamentals: Decibels', cat: 'RADIO', src: '/certs/RF2.png' },
    { name: 'RF Fundamentals: Modulation', cat: 'RADIO', src: '/certs/RF3.png' },
    { name: 'RF Fundamentals: Radio Frequency', cat: 'RADIO', src: '/certs/RF4.png' }
  ]
  // Certificate Image Selector
  const [src, setSRC] = useState('/certs/blank.png')
  // Fileter Certifactes By Category

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div id='Certificate Image Selector' className='order-2 md:order-1 p-2'>
          {arrayOfCerts.map((cert) => (
            <div key={cert.name} className='flex-no-wrap flex-grow py-1'>
              <button className='bg-gray-900 w-64 text-white rounded p-1 text-xs hover:bg-orange-600 shadow-xl outline-none' onClick={() => setSRC(cert.src)}>{cert.name}</button>
            </div>
          ))}
        </div>
        <div id='Image Viewer' className='order-1 md:order-2 border-1 border-black shadow-xl max-h-screen h-full'>
          <div className='bg-gray-900 h-6' />
          <img src={src} width='700' />
          <div className='bg-gray-900 h-6' />
        </div>
      </div>
    </>
  )
}
export default Buttons
