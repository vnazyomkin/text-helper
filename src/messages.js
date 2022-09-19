import { Language } from "./constants"
import { changeLang } from "./helpers"

const TextHelperMessage = {
  PAGE_TITLE: "Кириллица VS Латиница",
  [Language.RUSSIAN]: "Русский",
  [Language.ENGLISH]: 'Английский',
  [`${Language.RUSSIAN}S`]: "русские",
  [`${Language.ENGLISH}S`]: 'английские',
  [`${Language.RUSSIAN}_GENITIVE`]: 'русских',
  [`${Language.ENGLISH}_GENITIVE`]: 'английских',
  SEARCH_WRONG_WORD: lang => `Поиск ${TextHelperMessage[changeLang(lang) + '_GENITIVE']} букв`,
  CHANGE_LANG_ICON: '⇄',
  WRITE_TEXT: 'Введите текст',
  COUNT_BUGS: 'Количество опечаток: ',
  AUTO_FIX_BUGS: 'Автоисправление опечаток',
  AUTO_FIX_BUGS_DESCRIPTION: lang => `Замена ${TextHelperMessage[lang + '_GENITIVE']} букв в тексте на ${TextHelperMessage[`${changeLang(lang)}S`]}, похожие по написанию (о, а, р и т.д)`,
}

export { TextHelperMessage }
