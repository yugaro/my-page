import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import style from '@/styles/style.module.scss'
import { slideImage } from '@/utils/slide'
import { slideImagePhone } from '@/utils/slide'
import { slideSettings } from '@/utils/slide'

export const Slide = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])

  return (
    <div className={style['slide__wrapper']}>
      <Slider {...slideSettings} className={style['slide__container__img']}>
        {windowWidth > 650
          ? slideImage().map((item, index) => (
              <img
                src={item.link}
                className={style['slide__img']}
                key={index}
                alt='topImage'
              />
            ))
          : slideImagePhone().map((item, index) => (
              <img
                src={item.link}
                className={style['slide__img']}
                key={index}
                alt='topImage'
              />
            ))}
      </Slider>
      <div className={style['slide__container__txt']}>
        <div className={`${style['slide__txt']} ${style['slide__txt__tt1']}`}>
          Hello!
          <br />
          I&apos;m Yuga!
          {windowWidth}
        </div>
        <div className={`${style['slide__txt']} ${style['slide__txt__tt2']}`}>
          Osaka University stutent
        </div>
      </div>
      <div className={style['slide__scroll__container']}>
        <div className={`${style['slide__txt']} ${style['slide__txt__tt3']}`}>
          scroll
        </div>
        <div className={style['slide__scroll__container__arrow']}>
          <div
            className={`${style['slide__scroll__arrow']} ${style['slide__scroll__arrow__tg1']}`}
          />
          <div
            className={`${style['slide__scroll__arrow']} ${style['slide__scroll__arrow__tg2']}`}
          />
          <div
            className={`${style['slide__scroll__arrow']} ${style['slide__scroll__arrow__tg3']}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Slide
