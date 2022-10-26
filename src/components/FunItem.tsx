import React, { FunctionComponent } from 'react'
import Stars from '../components/Stars'
import styles from './FunItem.module.scss'

export type Project = {
    title: string,
    url: string,
    img: string,
    description: string,
    link: string
}

interface Props {
    project: Project
}

const ResumeItem: FunctionComponent<Props> = ({project}) => {
  return (
    <div className={styles.fun__item}>
        <h2>{project.title}</h2>
        <div className={styles.fun__item__metadata}>
            <a className={styles.fun__item__link} href={project.url} rel='nofollow'>
                <img className={styles.fun__item__img} src={project.img} />
                <p className={styles.fun__item__paragraph}>
                    {project.description}
                    <strong className={styles.fun__item__strong}>{project.link} →</strong>
                </p>
            </a>
        </div>
        <Stars />
    </div>
  )
}

export default ResumeItem
