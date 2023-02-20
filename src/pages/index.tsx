import classnames from 'classnames'
import type { NextPage } from 'next'
import axios from 'axios'
import TRACK_IDS from './api/tracks'
import type {Content} from './api/content'
import { home } from './api/content'
import Head from 'next/head'
import Nav from '../components/Nav'
import type { TrackType } from '../components/Track'
import Track from '../components/Track'
import Stars from '../components/Stars'
import HorizontalRule from '../components/HorizontalRule'
import Loader from '../components/Loader'
import styles from './index.module.scss'

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1/'
const {SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET} = process.env

export async function getServerSideProps() {
  const response = await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    params: {
      grant_type: 'client_credentials',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64'))
    }
  })

  const {access_token} = response.data

  const {data: {tracks}} = await axios.get(`${SPOTIFY_BASE_URL}tracks?ids=${TRACK_IDS.join(',')}`, {
    headers: {
      withCredentials: true,
      Authorization: `Bearer ${access_token}`
  }})

  return { props: { tracks, home } }
}

interface Props {
  home: Content,
  tracks: TrackType[]
}


const Home: NextPage<Props> = (props) => {
  const {home: content, tracks} = props

  return (
    <>
      <Head>
        <title>Cher Scarlett - Software Engineer</title>
      </Head>
      <Nav />
      {content && tracks ? (
        <div className={classnames('content', styles.content__home)}>
          <h1>{ content.heading }</h1>
          <div>
            { content.paragraphs?.map((paragraph: string, index) => (<p key={index}>{ paragraph }</p>)) }
            <p>
              Follow me on&nbsp;
              <a className={styles.social__link} href="https://twitter.com/cherthedev">Twitter</a>,
              &nbsp;or&nbsp;
              <a className={styles.social__link} href="https://medium.com/@cherp">Medium</a>.
              &nbsp;or&nbsp;
              <a className={styles.social__link} href="https://github.com/cherscarlett">Github</a>.
              Reach me at&nbsp;
              <a className={styles.social__link} href="mailto:hello@cher.dev">hello@cher.dev</a>.
            </p>
          </div>
          <HorizontalRule />
          <h2>{ content.subHeading }</h2>
          <div className={styles.tracks}>
            { tracks.map((track: TrackType) => (<Track key={track.id} track={track} />)) || 'Loading tracks...'}
          </div>
          <Stars />
        </div>) : (<Loader />) }
    </>
  )
}

export default Home

// export const config = {
//   runtime: 'experimental-edge',
// }
