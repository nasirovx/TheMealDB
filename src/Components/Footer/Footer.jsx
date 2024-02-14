import React from 'react'
import s from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer_content}>
        <div className={s.footer_item1}>
          <div className={s.item_text}>
            <span>© 2024 TheMealDB</span>
            <span style={{display: 'flex', alignItems: 'center'}}>Proudly built in the UK <img style={{marginLeft: '5px'}} src="https://www.themealdb.com/images/icons/flags/big/16/gb.png" alt="" /></span>
          </div>
        </div>
        <div className={s.footer_item2}>
          <div className={s.item_icons}>
            <div className={s.icon1}>
              Socials: 
                <img src="https://www.themealdb.com/images/facebook_icon.png" alt="" />
                <img src="https://www.themealdb.com/images/twitter_icon.png" alt="" />
                <img src="https://www.themealdb.com/images/discord_icon.png" alt="" />
            </div>
            <div className={s.icon2}>
              <div><img src="	https://www.themealdb.com/images/logo-tcdb.png" alt="" /></div>
              <div><img src="	https://www.themealdb.com/images/logo-tadb.png" alt="" /></div>
              <div><img src="https://www.themealdb.com/images/logo-tsdb.png" alt="" /></div>
            </div>
          </div>
        </div>
        <div className={s.footer_item3}>
          <div className={s.item_about}>
            <span>About</span> <span>Faq</span> <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
