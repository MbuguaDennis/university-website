import React from 'react'
import './Hero.css';
import arrow_icon from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better world through quality education</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam labore quia, ut officiis assumenda laboriosam a ab reiciendis odio, numquam dolore velit, similique nobis est dolores aspernatur nemo dignissimos autem!
            Accusamus aliquid cupiditate provident dignissimos natus corporis voluptatum a quia sit, magnam quibusdam dolorum dolores sint eos omnis nam! Provident quae hic quibusdam tempore non officia labore corporis voluptate maiores?</p>
            <button className="btn">Explore more 
            <img src={arrow_icon} className='arrow-icon' />
            </button>
        </div>
    </div>
  )
}

export default Hero