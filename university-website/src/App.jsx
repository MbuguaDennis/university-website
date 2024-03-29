import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/TItle/Title'

const App = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <div className="container">
      <Title subtitle = 'Our Program' title='What we offer' />
      <Programs/>
     
      </div>
     
    </div>
  )
}

export default App