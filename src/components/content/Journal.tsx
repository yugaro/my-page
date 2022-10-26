import React from 'react'
import { journalList } from '@/utils/me'
import style from '@/styles/style.module.scss'

export const Journal = () => {
  return (
    <div className='wrapper' id='Journal'>
      <div className='ttl'>Journal</div>
      <ul className=''>
        {journalList().map((item, index) => (
          <li className='stxt' key={index}>
            {item.title}{' '}
            <a
              href={item.title}
              className={`${style['btn']} ${style['btn__underline']}`}
            >
              [arXiv]
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Journal
