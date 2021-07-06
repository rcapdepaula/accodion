import React, { useState } from 'react'
import {
  Wrapper,
  Accordion,
  Button,
  QuestionTitle,
  QuestionText,
} from './SingleQuestion.styles'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

const SingleQuestion = ({ title, info }) => {
  // create a new state variable to show the question
  const [showQuestion, setShowQuestion] = useState(false)

  return (
    <Wrapper>
      <Accordion>
        <QuestionTitle>
          <h4>{title}</h4>
          <Button onClick={() => setShowQuestion(!showQuestion)}>
            {showQuestion ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
          </Button>
        </QuestionTitle>
        <QuestionText open={info}>{showQuestion && <p>{info}</p>}</QuestionText>
      </Accordion>
    </Wrapper>
  )
}

export default SingleQuestion
