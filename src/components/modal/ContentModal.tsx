import React from 'react'
import { Link as Scroll } from 'react-scroll'
import style from '@/styles/style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faWindowClose,
  faAddressCard,
} from '@fortawesome/free-regular-svg-icons'
import {
  faLaptopCode,
  faUserGraduate,
  faGlobe,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons'
import { BiMobileVibration } from 'react-icons/bi'

type Props = {
  setMouseClickMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const ContentModal = ({ setMouseClickMenu }: Props) => {
  return (
    <div className={style['header__modal']}>
      <div className={style['header__modal__container']}>
        <div>
          <FontAwesomeIcon
            icon={faWindowClose}
            className={`${style['header__modal__close']}`}
            onClick={() => setMouseClickMenu(false)}
          />
        </div>
        <Scroll
          className={`${style['header__modal__title']}`}
          to='AboutMe'
          smooth={true}
          onClick={() => setMouseClickMenu(false)}
        >
          {' '}
          <FontAwesomeIcon icon={faAddressCard} /> About Me
        </Scroll>
        <Scroll
          className={`${style['header__modal__title']}`}
          to='SpecialtySkill'
          smooth={true}
          onClick={() => setMouseClickMenu(false)}
        >
          {' '}
          <FontAwesomeIcon icon={faLaptopCode} /> Specialty & Skill
        </Scroll>
        <Scroll
          className={`${style['header__modal__title']}`}
          to='Education'
          smooth={true}
          onClick={() => setMouseClickMenu(false)}
        >
          {' '}
          <FontAwesomeIcon icon={faUserGraduate} /> Education
        </Scroll>
        <Scroll
          className={`${style['header__modal__title']}`}
          to='Job'
          smooth={true}
          onClick={() => setMouseClickMenu(false)}
        >
          {' '}
          <FontAwesomeIcon icon={faGlobe} /> Work Experience
        </Scroll>
        <Scroll
          className={`${style['header__modal__title']}`}
          to='AppStore'
          smooth={true}
          onClick={() => setMouseClickMenu(false)}
        >
          {' '}
          <BiMobileVibration /> App Store
        </Scroll>
        <Scroll
          className={`${style['header__modal__title']}`}
          to='Article'
          smooth={true}
          onClick={() => setMouseClickMenu(false)}
        >
          {' '}
          <FontAwesomeIcon icon={faNewspaper} /> Other
        </Scroll>
      </div>
    </div>
  )
}

export default ContentModal
