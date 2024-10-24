import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageBar = ({ className }) => {
  const { i18n } = useTranslation();

  const options = [
    { value: "jp", label: "日本語" },
    { value: "en", label: "ENGLISH" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <select
      className={`${className} font-semibold border-[0.5px] px-4 cursor-pointer`}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageBar;
