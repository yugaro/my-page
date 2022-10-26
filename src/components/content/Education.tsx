import React from 'react'
import Timeline from '@/components/timeline/Timeline'
import { educationList } from '@/utils/me'

export const Education = () => {
  return (
    <div className='wrapper' id='Education'>
      <div className='ttl'>Education</div>
      {educationList().map((educationItem, index) => (
        <Timeline timelineContent={educationItem} key={index} />
      ))}
    </div>
  )
}

export default Education
