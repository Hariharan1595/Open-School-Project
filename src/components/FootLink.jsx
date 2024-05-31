import React from 'react'
import './Footer.css'

const FootLink = ({title,links}) => {
  return (
    <div className='cell'>
        <h2>
            {title}
        </h2>
        <br></br>
        {
            links.map((itr)=>(
            <a className='cellLink' href={itr.link}>{itr.name}
            </a>
            )
            )
        }
    </div>
  )
}

export default FootLink