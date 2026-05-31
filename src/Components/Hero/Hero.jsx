import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'> 
            <h1>Shaping better education for a better world.</h1>
            <p>Our innovative curriculum equips students with practical knowledge, 
            modern skills, and hands-on experience to thrive and lead in today’s 
            fast-evolving education landscape.</p>
            <button
  className="btn"
  onClick={() => window.open("https://www.google.com", "_blank")}
>
  Explore more <img src={dark_arrow} alt="" />
</button>
        </div>

    </div>
  )
}

export default Hero