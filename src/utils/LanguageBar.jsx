import { useTranslation } from "react-i18next";

const LanguageBar = ({ className }) => {
  const { i18n } = useTranslation();

  const options = [
    { code: "jp", name: "日本語" },
    { code: "en", name: "ENGLISH" },
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
        <option key={i} value={option.code}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageBar;
