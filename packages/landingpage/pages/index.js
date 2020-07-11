import Layout from '../components/layout'

function IndexPage () {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='p-3 my-8 text-lg md:text-2xl'>
          Welcome to my site. Everything was created using
          <a href='https://www.docker.com/' target='_blank' rel='noopener noreferrer'><strong> Docker</strong></a>,
          <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'><strong> Next.js</strong></a>,
          <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'><strong> React</strong></a>,
          <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener noreferrer'><strong> Typescript</strong></a>, and
          <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer'><strong> Tailwindcss</strong></a>.
          This was created to showcase my achievments and understanding of frontend and backend programming.
          If you would like to view the source please go to my
          <a href='https://github.com/LocalHappiness/dockerized-josherman.tech' target='_blank rel="noopener noreferrer"'><strong> GitHub </strong></a>
          . Thanks and enjoy!
        </h2>
      </div>
    </Layout>
  )
}

export default IndexPage
