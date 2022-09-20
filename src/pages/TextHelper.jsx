import React, { useRef, useState } from 'react';
import { changeLang, fixText } from '../helpers';
import { TextHelperMessage } from '../messages';
import Container from '../components/Container';
import TextWithTitle from '../components/TextWithTitle';
import { Language, Regex } from '../constants';

const TextHelper = () => {
  const textField = useRef()
  const resultField = useRef()
  const hoverField = useRef()

  const [textFieldValue, setTextFieldValue] = useState('')
  const [chosenLang, setChosenLang] = useState(Language.RUSSIAN)
  const [isAnimationProcessing, setIsAnimationProcessing] = useState(false)
  let countBugs = 0; 
  const resultText = textFieldValue.split('').map((word, index) => {
    const classNames = ['word']
    if (word.match(Regex[chosenLang])) {
      countBugs++;
      classNames.push('word--err');
    }
    return <span key={index} className={classNames.join(' ')}>{word}</span>
})

  return (
    <Container title={TextHelperMessage.PAGE_TITLE}>
      <form className="form">
        <div className="text-block">
          <TextWithTitle title={TextHelperMessage[chosenLang]}>
            <textarea
              ref={textField}
              className="text-field"
              placeholder={TextHelperMessage.WRITE_TEXT}
              name="text"
              value={textFieldValue}
              onChange={({ target }) => setTextFieldValue(target.value)}
              onMouseEnter={({ target }) => hoverField.current = target }
              onScroll={({ target }) => {
                if (hoverField.current === target) resultField.current.scrollTop = textField.current.scrollTop
              }}
            />
          </TextWithTitle>
          {/* TODO переходы по ошибкам */}
          {/* TODO ctrl A не работает */}
          {/* TODO улучшить адаптивность*/}
          <div
            className={`change-lang${isAnimationProcessing ? ' change-lang--clicked' : ''}`}
            onClick={() => {
              setIsAnimationProcessing(true)
              setTimeout(() => setChosenLang(lang => changeLang(lang)), 500)
              setTimeout(() => setIsAnimationProcessing(false), 500)
            }}
          >
            {TextHelperMessage.CHANGE_LANG_ICON}
          </div>
          <TextWithTitle title={TextHelperMessage.SEARCH_WRONG_WORD(chosenLang)}>
            <div 
              className="text-field"
              ref={resultField}
              onMouseEnter={({ target }) => hoverField.current = target }
              onScroll={({ target }) => {
                if (hoverField.current === target) textField.current.scrollTop = resultField.current.scrollTop
              }}
            >
              {resultText}
            </div>
          </TextWithTitle>
        </div>
        <div className="info-block">
          <span>{TextHelperMessage.COUNT_BUGS}</span>
          <span className={`count-bugs ${!countBugs && 'count-bugs--zero'}`}>{countBugs}</span>
          <button 
            type="button"
            className="button"
            onClick={() => setTextFieldValue(fixText(textFieldValue, chosenLang === Language.RUSSIAN))}
          >
            {TextHelperMessage.AUTO_FIX_BUGS}
          </button>
          <div className="note">{TextHelperMessage.AUTO_FIX_BUGS_DESCRIPTION(chosenLang)}</div>
        </div>
      </form>
    </Container>
  )
};

export default TextHelper;
