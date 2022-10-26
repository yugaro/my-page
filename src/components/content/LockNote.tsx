import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import style from '@/styles/style.module.scss'

export const LockNote = () => {
  return (
    <div className={style['dc__wrapper']} id='AppStore'>
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
      <div className={style['dc__content']}>
        <div className={`${'ttl'} ${style['locknote__title']}`}>LockNote</div>
        <a
          className={`${'sttl'} ${style['appstore__title']}`}
          href='https://apps.apple.com/app/id1590985522'
        >
          Lock Note, iOS/Android App, React Native
        </a>
        <div className='txt'>
          自分専用のメモを作成、保存、編集できるモバイルアプリケーションです。
          自分のメールアドレスとメモ情報を結びつけ、クラウドにデータを保存します。
          保存したデータはいつでも取り出すことが可能です。
          問い合わせはメールアドレスまでお願い致します。
        </div>
      </div>
    </div>
  )
}

export default LockNote
