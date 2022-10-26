import React from 'react'
import Timeline from '@/components/timeline/Timeline'
import { jobList } from '@/utils/me'

export const Job = () => {
  return (
    <div className='wrapper' id='Job'>
      <div className='ttl'>Work Experience</div>
      {jobList().map((jobItem, index) => (
        <Timeline timelineContent={jobItem} key={index} />
      ))}
    </div>
  )
}

export default Job
