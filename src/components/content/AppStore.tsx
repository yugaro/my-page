import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import style from '@/styles/style.module.scss'

export const AppStore = () => {
  return (
    <div className='wrapper' id='AppStore'>
      <div className='ttl'>Download App</div>
      <div className={style['dc__wrapper']}>
        <div
          className={`${style['appstore__wrapper']} ${style['appstore__wrapper__left']} `}
        >
          <Link href='/locknote' passHref>
            <img
              src='/images/LockNoteIcon.png'
              className={`${style['icon__circle']} ${style['icon__circle__locknote']}`}
              alt='locknote'
            />
          </Link>
          <a
            className={style['btn__store']}
            href='https://apps.apple.com/app/id1590985522'
          >
            <FontAwesomeIcon
              icon={faApple}
              className={style['btn__store__icon']}
            />
            <div className='txt'> App Store</div>
          </a>
          <a
            className={style['btn__store']}
            href='https://play.google.com/store/apps/details?id=jp.yugaro.locknote'
          >
            <FontAwesomeIcon
              icon={faGooglePlay}
              className={style['btn__store__icon']}
            />
            <div className='txt'> Google Play </div>
          </a>
        </div>
        <div className={style['appstore__wrapper']}>
          <a
            className={`${'sttl'} ${style['appstore__title']}`}
            href='https://apps.apple.com/app/id1590985522'
          >
            Lock Note, iOS/Android App, React Native
          </a>
          <div className='txt'>
            A mobile application that allows you to create, save, and edit your
            own notes. It connects your email address with the note information
            and stores the data in the cloud. The saved note data can be
            retrieved at any time. For inquiries, please get in touch with me at
            my email address.&nbsp;
            <Link href='/locknote' passHref>
              <span className={`${style['btn']} ${style['btn__underline']}`}>
                [Privacy & Policy]
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppStore
