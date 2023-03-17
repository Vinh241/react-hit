import React from 'react'
import  Data  from '../Data'
import './Section.css'

const Section = () => {
  return (
    <div className='container2'>
      {
        Data.map((item,index) =>{
            return(
              <div className='item'>
                <img className='bg' src={item.bg}/>
                <img className='img' src={item.img}/>
                <div class='txt'>
                  <h3>{item.content}</h3>
                  <p>{item.text}</p>
                  <h4 className='link'>Learn more &#8594;</h4>
                </div>
              </div>
            )
        })
      }
    </div>
  )
}
export default Section;