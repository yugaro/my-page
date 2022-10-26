import React from 'react'
import { locknoteTerms } from '@/utils/locknote'
import style from '@/styles/style.module.scss'

export const PrivacyPolicy = () => {
  return (
    <div className='wrapper' id='PrivacyPolicy'>
      <div className='ttl'>Privacy Policy</div>
      <div className='content'>
        {locknoteTerms().map((items, indexs) => (
          <div key={indexs}>
            <div className={`${'sttl'} ${style['privacypolicy__stitle']}`}>
              {items.title}
            </div>
            <div className={`${'txt'} ${style['privacypolicy__txt']}`}>
              {items.txt}
              {items.cases ? (
                <ul>
                  {items.cases.map((item, index) => (
                    <li key={index}>{item.case}</li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PrivacyPolicy
