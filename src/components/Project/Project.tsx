import React from 'react'
import { Image } from 'antd'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import oksyG from '../../assets/projects/oksyG.webp'
import hotel from '../../assets/projects/hotel.webp'
import charismo from '../../assets/projects/charisma.webp'
import las from '../../assets/projects/las.webp'
import hydroAdmin from '../../assets/projects/hydroAdmin.webp'
import MService from '../../assets/projects/MService.webp'
import youthCenter from '../../assets/projects/YouthCenter.webp'
import aliExpress from '../../assets/projects/aliExpress.webp'
import build from '../../assets/projects/build.webp'
import buildAdmin from '../../assets/projects/buildAdmin.webp'
import doctor from '../../assets/projects/doctor.webp'
import nura from '../../assets/projects/nuraElite.webp'
import cyber_sport from '../../assets/projects/cyber_sport.png'
import and_sport from '../../assets/projects/andijan_sport.png'
import bemorUz from '../../assets/projects/image.png'

import 'antd/dist/antd.css'
import style from './Project.module.css'

const Project = () => {
  const { t } = useTranslation()

  const data = [
    {
      id: 23,
      image: bemorUz,
      title: `Bemor Uz `,
      technologies: ` React, Typescript`,
      time: 4,
      link: 'https://bemoruz.netlify.app/en',
    },
    {
      id: 0,
      image: nura,
      title: `Nura Elite `,
      technologies: `React, Yandex Map, NodeJs, Express, Mongodb`,
      time: 1,
      link: 'https://nuraelite.netlify.app/',
    },
    {
      id: 12,
      image: cyber_sport,
      title: `Cyber Sport`,
      technologies: `React, Ant design`,
      time: 1,
      link: 'https://cyber-sport.netlify.app/',
    },
    {
      id: 13,
      image: and_sport,
      title: `Andijan Sport`,
      technologies: `React, Ant design, React-router-dom, `,
      time: 3,
      link: 'https://andijan-football.netlify.app/',
    },
    {
      id: 4,
      image: aliExpress,
      title: `AliExpress Clone`,
      technologies: `React, Redux, React-Redux, React-Router,
      Redux-form, Material Ui, Ant Design`,
      time: 5,
      link: 'https://robiyaxon.github.io/programmer-girls-React/',
    },
    {
      id: 5,
      image: las,
      title: `LAS`,
      technologies: `React, React-Router, NextJs, Ant Design`,
      time: 5,
      link: 'https://papaya-puffpuff-1aa409.netlify.app/',
    },
    {
      id: 6,
      image: doctor,
      title: `Doctor`,
      technologies: `React, Redux, React-Redux, React-Router, Ant
      design`,
      time: ' 1,5',
      link: 'https://diplomishi.netlify.app/',
    },
    {
      id: 7,
      image: charismo,
      title: `Charismo`,
      technologies: `React, Redux, React-Redux, React-Router,
      Redux-form, TypeScript, Aos, Ant design, Material Ui`,
      time: ' 5',
      link: 'https://tukhtayevaroziya.github.io/charismo/',
    },
    {
      id: 1,
      image: oksyG,
      title: `Oksy-G Milk`,
      technologies: ` HTML5, Css3, Bootsrap4, JavaScript, jQuery`,
      time: 20,
      link: 'https://tukhtayevaroziya.github.io/Oksy-G-Milk-Project/',
    },
    {
      id: 2,
      image: hotel,
      title: `Hotel`,
      technologies: `React, Redux, React-Redux, React-Router,
      Redux-form`,
      time: 14,
      link: 'https://tukhtayevaroziya.github.io/hotel-project-/',
    },
    {
      id: 3,
      image: youthCenter,
      title: `Raven`,
      technologies: ` HTML5, Css3, Bootsrap4, JavaScript, jQuery`,
      time: 7,
      link: 'https://robiyaxon.github.io/Robiya-coder-Markaz/',
    },

    {
      id: 8,
      image: MService,
      title: `Mers Shop`,
      technologies: `React, Redux, React-Router,
      React-query, Swiper, axios, react-i18next,
      Prop-types, Redux-thunk`,
      time: ' 5',
      link: 'http://178.128.85.100:6002/',
      condition: `(${t('real') + ' ' + t('project')})`,
    },
    {
      id: 9,
      image: build,
      title: `Build`,
      technologies: `React, React-Redux,
      React-Router, Ant design,
      react-yandex-maps, react-i18next, react-bootstrap`,
      time: ' 7',
      link: 'http://buildmegaservice.com',
      condition: `(${t('real') + ' ' + t('project')})`,
    },
    {
      id: 10,
      image: hydroAdmin,
      title: `Hydro Admin`,
      technologies: `React, Redux, React-Redux,
      React-Router, Redux-form, Reactsrap, styled-component, react-i18next`,
      time: ' 7',
      condition: `(${t('real') + ' ' + t('project')})`,
      close: true,
    },
    {
      id: 11,
      image: buildAdmin,
      title: `Build Admin`,
      technologies: `React, Redux, React-Redux, React-Router,
      Redux-thunk, Ant design, axios, node-sass`,
      time: ' 7',
      condition: `(${t('real') + ' ' + t('project')})`,
      close: true,
    },
  ]

  const dataMap = data.map((d) => (
    <div className={style.project__block__box} key={d.id}>
      <Image src={d.image} />
      <h3>
        {d.title} {t('project')} {d.condition}
      </h3>
      <div>

      <p>{t('technology') + d.technologies}</p>
      {!d.close ? (
        <h5>{t('time') + d.time + ' ' + t('day')}</h5>
      ) : (
        <h5>Teamwork</h5>
      )}
      </div>

      <div className={style.project__block__box__as_btn}>
        {!d.close ? (
          <a href={d.link} target="_blank" rel="noopener noreferrer">
            {t('visit')}
          </a>
        ) : (
          <NavLink to="/project">{t('closedSite')}</NavLink>
        )}
      </div>
    </div>
  ))

  return (
    <div className={style.project}>
      <h1 className={style.project_title + ' project_title'}>{t('navbar1')}</h1>
      <div className={style.project__block}>{dataMap}</div>
    </div>
  )
}

export default Project
