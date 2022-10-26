import React from 'react'
import { specialitySkillList } from '@/utils/me'
import style from '@/styles/style.module.scss'

export const SpecialtySkill = () => {
  return (
    <div className='wrapper' id='SpecialtySkill'>
      <div className='ttl'>Specialty & Skill</div>
      <div className='content'>
        {specialitySkillList().map((specialitySkillItem, index) => (
          <div className={style['specialityskill__item']} key={index}>
            <div className='txt'>{specialitySkillItem.name}</div>
            <div className={style['specialityskill__form']}>
              <div
                style={{ width: specialitySkillItem.level }}
                className={style['specialityskill__level']}
              >
                {' '}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecialtySkill
