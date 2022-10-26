import React from 'react'
import Link from 'next/link'
import style from '@/styles/style.module.scss'

export const ToHome = () => {
  return (
    <div className={style['tohome__wrapper']} id='ToHome'>
      <Link href='/' passHref>
        <img
          src='/images/YugaOnoueFacePhoto4.png'
          className={`${style['icon__circle']} ${style['icon__circle__tohome']}`}
          alt='tohome'
        />
      </Link>
      <div className='stxt'>Yuga Onoue, Osaka University</div>
      <div className='stxt'>
        Click{' '}
        <Link href='/' passHref>
          <span className={`${style['btn']} ${style['btn__underline']}`}>
            here{' '}
          </span>
        </Link>{' '}
        to my website.
      </div>
    </div>
  )
}

export default ToHome
