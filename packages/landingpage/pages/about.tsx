import Layout from '../components/layout'
import BioCard from '../components/biocard'
function AboutPage () {
  return (
    <Layout>
      <div className='flex flex-col object-center md:flex-row md:space-x-6 md:space-y-0'>
        <BioCard />
        <div className='space-y-6 md:w-1/2'>
          {[
            {
              heading: 'My life',
              body: 'When I was a young kid I was always fascinated with technology and all its possibilities. While growing up I would always be building peoples computers and explaining the technology, how to use it, and what it could do for them. Being from an oil town I naturally got into oil and worked my way up the ranks at all my job. Starting in 2016 I realized oil was not my only path forward. Enrolling in college to pursue network administration and integrated systems I found a deeper understanding of technology and its uses. Now days I have a home lab with multiple servers hosting webservers and doing a lot of work on AWS deployment of webservers. I utilize Docker on all my instances for containerization and rapid deployment while using Ansible to control my automation across the stack.'
            },
            {
              heading: 'What\'s Next',
              body: 'My future I want to be a full-stack developer and constantly learn more advance concepts and push myself to be a better developer.'
            }
          ].map((section) => (
            <div key={section.heading}>
              <h2 className='mb-1 text-xl font-bold'>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
