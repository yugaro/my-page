import React from 'react'
import { conferenceList } from '@/utils/me'

export const Conference = () => {
  return (
    <div className='wrapper' id='Conference'>
      <div className='ttl'>International Conference</div>
      <ul className=''>
        {conferenceList().map((item, index) => (
          <li className='stxt' key={index}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Conference
