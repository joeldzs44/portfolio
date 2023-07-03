import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="fade-in banner flex flex-col justify-center px-6 py-10 dark:text-white lg:px-10">
        <h1 className="text-3xl font-bold dark:text-white lg:text-5xl">Hi, I am Joel</h1>
        <p className="my-2 mt-4 text-lg lg:text-2xl">Software Engineer</p>
        <p className="my-4 font-light lg:text-xl">
          Read more
          <Link className="ml-2 mr-2 font-normal text-black" href="/about" passHref>
            <span className="font-bold"> about me </span>
          </Link>
          or
          <Link className="ml-2 font-normal text-black" href="/contact" passHref>
            <span className="font-bold"> connect with me</span>
          </Link>
        </p>
      </div>
    </>
  )
}
