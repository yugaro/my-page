import React from 'react'
import style from '@/styles/style.module.scss'

export const AboutMe = () => {
  return (
    <div className={style['dc__wrapper']} id='AboutMe'>
      <img
        src='/images/YugaOnoueFacePhoto4.png'
        className={`${style['icon__circle']} ${style['icon__circle__aboutme']}`}
        alt='aboutme'
      />
      <div className={style['dc__content']}>
        <div className='ttl'>About Me</div>
        <div className='txt'>
          I&apos;m a graduate student at Osaka University majoring in
          intelligent system, which is synthesized by mathematics, hardware, and
          software engineering. My particular concerns are Cyber-Physical
          Systems (CPSs), where physical and software components are densely
          intertwined with each other, and in the future, I would like to
          develop software and services that can enhance intelligence and ensure
          safety of a city-scale CPS. I am currently studying manipulation of
          the CPS with high performance, safety, and low cost by utilizing my
          knowledge of machine learning, control theory, and software
          verification. The unique knowledge and interdisciplinary experienced
          skill sets as an engineer allow me to merge multidisciplinary
          resources, from the theoretical developments to the applications. I
          hope to develop further my skills, manage a team, and provide
          directions that align with the company&apos;s overall goals.
        </div>
      </div>
    </div>
  )
}

export default AboutMe
