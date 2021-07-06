import React, { useState } from 'react'
import data from './../../data'
import { Wrapper, Title } from './Question.styles'
import SingleQuestion from '../SingleQuestion'

const Question = () => {
  // create a stateful destructuring to store our question data
  const [questions, setQuestions] = useState(data)

  return (
    <Wrapper>
      {/* <Title>Perguntas e Respotas</Title> */}
      <div>
        {data.map((question) => {
          // return and spread question array into SingleQuestion component
          return <SingleQuestion key={question.id} {...question} />
        })}
      </div>
    </Wrapper>
  )
}

export default Question
