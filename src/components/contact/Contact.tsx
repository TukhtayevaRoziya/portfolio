import React from "react";

import pic from "../../assets/contact.png";

import style from "./Contact.module.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
      const { t } = useTranslation()
    
  return (
    <div className={style.Contact}>
      <div className={style.ContactContent}>
        <h1>
           {t('contactTitle')} <br /> <span> {t('contactTitle2')} </span>
        </h1>
        <img src={pic} alt="" />
      </div>
      <div className={style.ContactForm}>
        <div>
          <label htmlFor="name">{t('contactName')}</label>
          <input type="text" id="name" placeholder={t('contactNamePlaceholder')} />
        </div>
        <div>
          <label htmlFor="email" >{t('contactEmail')}</label>
          <input type="email" id="email" placeholder={t('contactEmailPlaceholder')}/>
        </div>
        <div>
        <label htmlFor="message">{t('contactMessage')}</label>
        <textarea id="message" placeholder={t('contactMessagePlaceholder')}></textarea>
      </div>
       <div className={style.ContactBtn}>
        <button type="submit">{t('contactBtn')}</button>
      </div>
      </div>
     
    </div>
  );
};

export default Contact;
