import { useAtom } from "jotai";

import { languageAtom } from "../../../atoms/index";

const Language = ({ className }) => {
  const [lang, setLanguage] = useAtom(languageAtom);

  return (
    <select
      className={`${className} bg-[#0c2148] text-white border-white rounded-sm border-[0.5px] text-[13px]`}
      value={lang}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="日本語">日本語</option>
      <option value="ENGLISH">ENLISH</option>
    </select>
  );
};

export default Language;
