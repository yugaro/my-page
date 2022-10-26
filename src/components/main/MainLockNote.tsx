import React from 'react'
import LockNote from '@/components/content/LockNote'
import PrivacyPolicy from '../content/PrivacyPolicy'
import ToHome from '@/components/content/ToHome'
import style from '@/styles/style.module.scss'

export const MainLockNote = () => {
  return (
    <div className='section'>
      <img
        src='/images/cafe.jpg'
        className={style['locknote__top']}
        alt='cafe'
      />
      <div className='container'>
        <LockNote />
        <PrivacyPolicy />
        <ToHome />
      </div>
    </div>
  )
}

export default MainLockNote
