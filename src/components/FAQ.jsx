import React from 'react'
import './FAQ.css'

const FAQ = ({question,answer}) => {
  return (
    <div className='faqbox'>
        <div className='question'>{question}</div>
        <div className='answer'>{answer}</div>
    </div>
  )
}

export default FAQ