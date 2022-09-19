const Language = {
  RUSSIAN: 'RUSSIAN',
  ENGLISH: 'ENGLISH',
};

const Regex = {
  [Language.RUSSIAN]: /^[a-z]/gi,
  [Language.ENGLISH]: /^[а-яё]/gi,
}

const en2ruMap = {
  e: 'е',
  E: 'Е',
  T: 'Т',
  y: 'у',
  Y: 'У',
  o: 'о',
  O: 'О',
  p: 'р',
  P: 'Р',
  a: 'а',
  A: 'А',
  H: 'Н',
  k: 'к',
  K: 'К',
  x: 'х',
  X: 'Х',
  c: 'с',
  C: 'С',
  b: 'ь',
  B: 'В',
  M: 'М',
};

const ru2enMap = {
  е: "e",
  Е: "E",
  Т: "T",
  у: "y",
  У: "Y",
  о: "o",
  О: "O",
  р: "p",
  Р: "P",
  а: "a",
  А: "A",
  Н: "H",
  к: "k",
  К: "K",
  х: "x",
  Х: "X",
  с: "c",
  С: "C",
  ь: "b",
  В: "B",
  М: "M"
};

export {
  Language,
  Regex,
  en2ruMap,
  ru2enMap,
};