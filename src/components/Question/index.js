import React, { useState } from 'react'
import data from './../../data'
import { Wrapper } from './Question.styles'
import SingleQuestion from '../SingleQuestion'

const Question = () => {
  return (
    <Wrapper>
      <div>
        {data.map((items) => {
          // return and spread question array into SingleQuestion component
          return <SingleQuestion key={items.id} {...items} />
        })}
      </div>
    </Wrapper>
  )
}

export default Question
