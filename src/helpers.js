import { en2ruMap, Language, ru2enMap } from "./constants";

const fixText = (text, isEn2ru) => {
  return text.split('').map(word => (isEn2ru ? en2ruMap[word] : ru2enMap[word]) || word).join('')
}

const changeLang = lang => lang === Language.RUSSIAN ? Language.ENGLISH : Language.RUSSIAN;

export { fixText, changeLang };