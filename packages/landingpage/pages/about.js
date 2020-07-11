import Layout from '../components/layout'

function AboutPage () {
  return (
    <Layout>
      <div className='flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
        <div className='space-y-6 md:w-1/2'>
          {[
            {
              heading: 'My life',
              body: 'I\'m  always learning and constantly developing my skills.'
            },
            {
              heading: 'What is Next.js?',
              body: `Next.js is a minimalistic framework for creating server-rendered
              React applications.`
            }
          ].map((section) => (
            <div key={section.heading}>
              <h2 className='mb-3 text-xl font-bold'>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>

        <div className='md:max-w-xl  content-center'>
          <img
            alt='Me'
            className='border-orange-600 border-4  rounded-full h-64'
            src='/self/me.jpg'
          />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
