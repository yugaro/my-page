import React from 'react'
import { TimelineContent } from '@/models/timeline'
import style from '@/styles/style.module.scss'

type Props = {
  timelineContent: TimelineContent
}

export const Timeline = ({ timelineContent }: Props) => {
  return (
    <div className='content'>
      <div className={style['timeline__auxiliary']}>
        <div className={style['timeline__auxiliary__circle']} />
        <div className={style['timeline__auxiliary__line']} />
      </div>
      <div className={style['timeline__inner']}>
        <div className={style['timeline__history']}>
          <div className={style['timeline__history__year']}>
            {timelineContent.year}
          </div>
          <div className='txt'>{timelineContent.place}</div>
        </div>
        <div className={style['timeline__name']}>{timelineContent.name}</div>
        <div className='ssttl'>{timelineContent.status}</div>
        <ul className={style['timeline__content']}>
          {timelineContent.contents.map((item, index) => (
            <li className='txt' key={index}>
              {item.content}
            </li>
          ))}
        </ul>
        <div className='content'>
          {timelineContent.specs.map((item, index) => (
            <div className={style['timeline__spec']} key={index}>
              {item.spec}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
