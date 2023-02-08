import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './HomeMainbar.css'

const HomeMainbar = () => {

        var questionslist = [{
            id :1,
            upVotes: 3,
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
            upVotes: 3,
            downVotes: 2,
            noOfAnswers: 0,
            questionTitle: "What is a function?",
            questionBody: "It meant to be",
            questionTags: ["javascript", "R", "python"],
            userPosted: "mano",
            askedOn: "jan 1",
            },{
                id: 3,
                upVotes: 3,
                downVotes: 2,
                noOfAnswers: 0,
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
        </div>
    </div>
  )
}

export default HomeMainbar