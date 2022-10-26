import React from 'react'
import { articleList } from '@/utils/me'
import style from '@/styles/style.module.scss'

export const Article = () => {
  return (
    <div className='wrapper' id='Article'>
      <div className='ttl'>Article</div>
      <div className='content'>
        {articleList().map((item, index) => (
          <a href={item.link} className={style['article__item']} key={index}>
            <img
              src={item.image}
              className={`${style['article__item__image']} ${style['btn']}`}
              alt='qiita'
            />
            <div className='sttl'>{item.title}</div>
            <div className='txt'>{item.reader}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Article
