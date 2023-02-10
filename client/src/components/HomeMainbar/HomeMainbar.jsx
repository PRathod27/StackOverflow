import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

        var questionsList = [{
            id :1,
            votes: 3,
            downVotes: 2,
            noOfAnswers: 2,
            questionTitle: "What is a function?",
            questionBody: "It meant to be",
            questionTags: ["java", "node js", "react js", "mongo db", "express js"],
            userPosted: "mano",
            userId: 1,
            askedOn: "jan 1",
            },{
            id: 2,
            votes: 3,
            downVotes: 2,
            noOfAnswers: 0,
            questionTitle: "What is a function?",
            questionBody: "It meant to be",
            questionTags: ["javascript", "R", "python"],
            userPosted: "mano",
            askedOn: "jan 1",
            },{
                id: 3,
                votes: 2,
                downVotes: 2,
                noOfAnswers: 5,
                questionTitle: "What is a function?",
                questionBody: "It meant to be",
                questionTags: ["javascript", "R", "python"],
                userPosted: "mano",
                askedOn: "jan 1",
            }]

            const location = useLocation()

  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
              {
                location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All questions</h1>
              }
              <Link to = '/AskQuestion' className='ask-btn'>Ask Question</Link>
        </div>
        <div>
                {
                  questionsList === null ?
                  <h1>Loading...</h1>:
                  <>
                  <p>{ questionsList.length} questions</p>
                    {/* <QuestionsList questionsList = {questionsList} /> */}
                    <QuestionList questionsList={questionsList} />
                    
                  </>
                }
        </div>
    </div>
  )
}

export default HomeMainbar