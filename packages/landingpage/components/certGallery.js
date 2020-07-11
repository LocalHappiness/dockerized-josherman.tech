import React, { useState } from 'react'

const Buttons = () => {
  const arrayOfCerts = [
    { name: 'CCNA: Enterprise Networking, Security, and Automation', cat: 'CCNA', src: '/certs/CCNA1.png' },
    { name: 'CCNA: Introduction to Networks', cat: 'CCNA', src: '/certs/CCNA2.png' },
    { name: 'CCNA: Routing and Switching Essentials', cat: 'CCNA', src: '/certs/CCNA3.png' },
    { name: 'TestOut: Client Pro', cat: 'TESTOUT', src: '/certs/TESTOUT1' },
    { name: 'TestOut: Linux Pro', cat: 'TESTOUT', src: '/certs/TESTOUT2' },
    { name: 'TestOut: Network Pro', cat: 'TESTOUT', src: '/certs/TESTOUT3' },
    { name: 'TestOut: PC Pro', cat: 'TESTOUT', src: '/certs/TESTOUT4' },
    { name: 'TestOut: Server Pro 2016: Identity', cat: 'TESTOUT', src: '/certs/TESTOUT5' },
    { name: 'TestOut: Server Pro 2016: Install and Storage', cat: 'TESTOUT', src: '/certs/TESTOUT6' },
    { name: 'TestOut: Server Pro 2016: Networking', cat: 'TESTOUT', src: '/certs/TESTOUT7' },
    { name: 'VMware: Network and Security Architecture', cat: 'VMWARE', src: '/certs/VMWARE1' },
    { name: 'RF Fundamentals: Antennas', cat: 'RADIO', src: '/certs/RF1' },
    { name: 'RF Fundamentals: Decibels', cat: 'RADIO', src: '/certs/RF2' },
    { name: 'RF Fundamentals: Modulation', cat: 'RADIO', src: '/certs/RF3' },
    { name: 'RF Fundamentals: Radio Frequency', cat: 'RADIO', src: '/certs/RF4' }
  ]
  // Certificate Image Selector
  const [src, setSRC] = useState('/certs/blank.png')
  // Fileter Certifactes By Category

  return (
    <>
      <div className='flex flex-col md:flex-row bg-teal-300'>
        <div id='Certificate Image Selector' className='bg-blue-200 p-2 min-w-lg'>
          <h1>My Certificates</h1>
          {arrayOfCerts.map((cert) => (
            <div key={cert.name} className='flex-no-wrap flex-grow py-1'>
              <button className='bg-blue-600 text-white rounded p-1  text-xs' onClick={() => setSRC(cert.src)}>{cert.name}</button>
            </div>
          ))}
        </div>
        <div id='Image Viewer' className='bg-green-200'>
          <img src={src} height='800' width='1000' />
          <p>You clicked: {src}</p>
        </div>
      </div>
    </>
  )
}
export default Buttons
