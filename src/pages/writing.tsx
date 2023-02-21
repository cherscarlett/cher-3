import classnames from 'classnames'
import type { NextPage } from 'next'
import type { Content } from './api/content'
import { writing } from './api/content'
import proses from './api/proses'
import Head from 'next/head'
import Nav from '../components/Nav'
import Stars from '../components/Stars'
import Loader from '../components/Loader'
import type { Prose } from '../components/WritingItem'
import WritingItem from '../components/WritingItem'
import styles from './writing.module.scss'

export async function getServerSideProps() {

  return { props: { writing, proses } }
}

interface Props {
  writing: Content,
  proses: Prose[]
}

const Writing: NextPage<Props> = (props) => {
  const {writing: content, proses} = props

  return (
    <>
      <Head>
        <title>Cher Scarlett - Software Engineer - Writing</title>
      </Head>
      <Nav />
    { content && proses ? 
        (<div className={classnames('content', styles.content__writing)}>
        <h1>{content.heading}</h1>
        {proses.map((prose, index: number) => (<WritingItem prose={prose} key={index} />))}
        <Stars />
    </div>) : (<Loader />)}
    </>
  )
}

export default Writing
