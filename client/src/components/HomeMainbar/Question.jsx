import React from 'react'

const Question = ({question}) => {
  return (
    <div className='display-ans-container'>
        <div className='display-votes-ans'>
          <p>{question.votes}</p>
          <p>Votes</p>
        </div>
      <div className='display-votes-ans'>
      <p>{question.noOfAnswers}</p>
      <p>Answers</p>
      </div>

      
    </div>
  )
}

export default Question