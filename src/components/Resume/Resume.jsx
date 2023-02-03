import React from 'react'
import { useTranslation } from 'react-i18next'
import { SiLeetcode } from 'react-icons/si'
import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa'

import coder from '../../assets/girl_coder.webp'

import style from './Resume.module.css'

const Resume = () => {
  const { t } = useTranslation()

  const data = [
    {
      id: 0,
      class: style.telegram_icon,
      href: 'https://t.me/TukhtayevaRoziya',
      icon: <FaTelegramPlane />,
    },
    {
      id: 1,
      class: style.linkedin_icon,
      href: 'https://www.linkedin.com/in/roziya-tukhtayeva-07b447241/',
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      class: style.github_icon,
      href: 'https://github.com/tukhtayevaroziya',
      icon: <FaGithub />,
    },
    {
      id: 3,
      class: style.leetcode_icon,
      href: 'https://leetcode.com/Roziya/',
      icon: <SiLeetcode />,
    },
  ]

  const dataMap = data.map((d) => (
    <li key={d.id}>
      <a
        className={d.class}
        href={d.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {d.icon}
      </a>
    </li>
  ))

  return (
    <div className={style.Resume}>
      <img className={style.picture} src={coder} alt="" draggable={false} />
      <div className={style.block + ' ' + style.about_me}>
        <h3 className={style.title + ' resumeTitle'}>{t('aboutMe')}</h3>
        <p className={style.text + ' resumeText'}>
          {t('aboutMeText1')}
          <br />
          {t('aboutMeText2')}
        </p>
      </div>
      <div className={style.block + ' ' + style.extra}>
        <h3 className={style.title + ' resumeTitle'}>{t('esucation')}</h3>
        <p className={style.text + ' resumeText'}>{t('educationText')}</p>
      </div>
      <div className={style.My_skills}>
        <div className={style.block}>
          <h3 className={style.title1}>{t('mySkill')}</h3>
          <h3 className={style.title + ' resumeTitle'}>Front-End</h3>
          <p className={style.text + ' resumeText'}>
            HTML, CSS (SASS/SCSS/MODULE), JavaScript, JQuery, Bootstrap, Ajax,
            Json, ReactJs, Redux, Redux-thunk, ChartJs, React-router, Ant
            design, Material UI, AOS, Chakra UI, React Bootstrap, Typescript,
            Redux form
          </p>
        </div>
        <div className={style.block}>
          <h3 className={style.title + ' resumeTitle'}>{t('additonal')}</h3>
          <p className={style.text + ' resumeText'}>
            Git, Github, Axios, Rest API, Figma
          </p>
        </div>
      </div>
      <div className={style.mine}>
        <div className={style.block + ' ' + style.extra}>
          <h3 className={style.title + ' resumeTitle'}>{t('social')}</h3>
          <div className={style.socials + ' resumeSocials'}>
            <ul>{dataMap}</ul>
          </div>
        </div>
        <div className={style.block + ' ' + style.extra}>
          <h3 className={style.title + ' resumeTitle'}>{t('contact')}</h3>
          <div className={style.contact + ' resumeContact'}>
            <a
              href="https://t.me/TukhtayevaRoziya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
              @TukhtayevaRoziya
            </a>
            {/* <a href="tel:+998905280770">
              <FaPhoneAlt /> +998 905280770
            </a> */}
            <a
              href="mailto:roziyabegimtuxtayeva@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              id={style.mail}
            >
              <FaEnvelope />
              roziyabegimtuxtayeva@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
