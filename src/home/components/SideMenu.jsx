import React from 'react'
import Aside1 from '../components/img/aside-1.jpg'
import Aside2 from '../components/img/aside-2.jpg'
import Aside3 from '../components/img/aside-3.jpg'

export const SideMenu = () => {
  return (
    <>
      <div className="aside">
        <img className="w-100" src={Aside1} alt="feliz-navidad" />
        <img className="w-100" src={Aside2} alt="feliz-navidad" />
        <img className="w-100" src={Aside3} alt="feliz-navidad" />

        <img className="w-100" src={Aside1} alt="feliz-navidad" />
        <img className="w-100" src={Aside2} alt="feliz-navidad" />
        <img className="w-100" src={Aside3} alt="feliz-navidad" />
        
        <img className="w-100" src={Aside1} alt="feliz-navidad" />
        <img className="w-100" src={Aside2} alt="feliz-navidad" />
        <img className="w-100" src={Aside3} alt="feliz-navidad" />
      </div>
    </>
  )
}
