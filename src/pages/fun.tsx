import classnames from 'classnames'
import type { NextPage } from 'next'
import type { Content } from './api/content'
import { fun } from './api/content'
import projects from './api/projects'
import Head from 'next/head'
import Nav from '../components/Nav'
import HorizontalRule from '../components/HorizontalRule'
import Stars from '../components/Stars'
import Loader from '../components/Loader'
import styles from './fun.module.scss'
import type { Project } from '../components/FunItem'
import FunItem from '../components/FunItem'

export async function getServerSideProps() {

  return { props: { fun, projects } }
}

interface Props {
  fun: Content,
  projects: Project[]
}

const Resume: NextPage<Props> = (props) => {
  const {fun: content, projects} = props

  return (
    <>
      <Head>
        <title>Cher Scarlett - Software Engineer - Fun Stuff</title>
      </Head>
      <Nav />
      { content ? 
          (<div className={classnames('content', styles.content__fun)}>
            <h1>{content.heading}</h1>
            { content.paragraphs?.map((paragraph, index) => (<p key={index}>{ paragraph }</p>)) }
            <HorizontalRule />
            {projects.map((project, index) => (<FunItem project={project} key={index} />))}
            <Stars />
        </div>) : (<Loader />)}
    </>
  )
}

export default Resume
