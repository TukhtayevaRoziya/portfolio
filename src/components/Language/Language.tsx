import { SetStateAction, useState } from "react";

import i18n from "../../i18n";

import "./TopHeader.css";

function Language() {
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState<string>(defaultLang);

  const handleChange = (event: {
    target: { value: SetStateAction<string | null> | any };
  }) => {
    setLang(event.target.value);
    console.log(event.target);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className="TopHeader">
      <div className="select">
        <select name="lang" value={lang} onChange={handleChange}>
          <option value="en">En</option>
        </select>
        <select name="lang" value={lang ?? "uz"} onChange={handleChange}>
          <option value="uz">Uz</option>
        </select>
      </div>
    </div>
  );
}

export default Language;
