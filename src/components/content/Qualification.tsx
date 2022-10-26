import React from 'react'
import { qualificationList } from '@/utils/me'

export const Qualification = () => {
  return (
    <div className='wrapper' id='Qualification'>
      <div className='ttl'>Qualification</div>
      <ul>
        {qualificationList().map((item, index) => (
          <li className='stxt' key={index}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Qualification
