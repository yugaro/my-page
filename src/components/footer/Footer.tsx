import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import style from '@/styles/style.module.scss'

export const Footer = () => {
  const [isMouseOverMail, setMouseOverMail] = useState(false)
  const [isMouseClickMail, setMouseClickMail] = useState(false)

  const handleMailOver = () => {
    setMouseOverMail(true)
  }

  const handleMailOut = () => {
    setMouseOverMail(false)
    setMouseClickMail(false)
  }

  const handleClickMail = () => {
    setMouseClickMail(true)
    setMouseOverMail(false)
    navigator.clipboard.writeText('onoue@hopf.sys.es.osaka-u.ac.jp')
  }

  let mailIconText
  if (isMouseOverMail) {
    mailIconText = (
      <p
        className={`${style['btn__sns__mail__fukidashi']} ${style['btn__sns__mail__fukidashi__footer']} ${style['btn__sns__mail__fukidashi__before']}`}
      >
        Click to copy my email address to your clipboard
      </p>
    )
  }

  let mailIconText2
  if (isMouseClickMail) {
    mailIconText2 = (
      <p
        className={`${style['btn__sns__mail__fukidashi']} ${style['btn__sns__mail__fukidashi__footer']} ${style['btn__sns__mail__fukidashi__after']}`}
      >
        Copied!!
      </p>
    )
  }

  return (
    <div className='section'>
      <div className='container'>
        <div className='ttl'>Contact</div>
        <div className={style['footer__wrapper']}>
          <div className={style['btn__sns__wrapper']}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`${style['btn']} ${style['btn__sns']} ${style['btn__sns__mail']}`}
              onMouseOver={handleMailOver}
              onMouseOut={handleMailOut}
              onClick={handleClickMail}
            />
          </div>
          {mailIconText}
          {mailIconText2}
          <a
            href='https://github.com/yugaro'
            className={style['btn__sns__wrapper']}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={`${style['btn']} ${style['btn__sns']} ${style['btn__sns__github']}`}
            />
          </a>
          <a
            href='https://www.instagram.com/garoyugaro/'
            className={style['btn__sns__wrapper']}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={`${style['btn']} ${style['btn__sns']} ${style['btn__sns__instagram']}`}
            />
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=100035299155421'
            className={style['btn__sns__wrapper']}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className={`${style['btn']} ${style['btn__sns']} ${style['btn__sns__facebook']}`}
            />
          </a>
          <a
            href='https://twitter.com/garoyugaro/'
            className={style['btn__sns__wrapper']}
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className={`${style['btn']} ${style['btn__sns']} ${style['btn__sns__twitter']}`}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/yuga-onoue-8934531a8/'
            className={style['btn__sns__wrapper']}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`${style['btn']} ${style['btn__sns']} ${style['btn__sns__linkedin']}`}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
