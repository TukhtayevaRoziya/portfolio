import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

import pic from "../../assets/contact.png";

import style from "./Contact.module.css";

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSend = {
      name,
      email,
      message,
    };

    try {
      await axios.post(
        "https://portfolio-api-two-rosy.vercel.app/api/contact",
        dataToSend,
      );
      alert("Iltimos! Emailingizni tekshiring!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.Contact}>
      <div className={style.ContactContent}>
        <h1>
          {t("contactTitle")} <br /> <span> {t("contactTitle2")} </span>
        </h1>
        <img src={pic} alt="" />
      </div>
      <form onSubmit={handleSubmit} className={style.ContactForm}>
        <input
          type="text"
          id="name"
          required
          placeholder={t("contactNamePlaceholder")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          id="email"
          required
          placeholder={t("contactEmailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          id="message"
          required
          placeholder={t("contactMessagePlaceholder")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">{t("contactBtn")}</button>
      </form>
    </div>
  );
};

export default Contact;
