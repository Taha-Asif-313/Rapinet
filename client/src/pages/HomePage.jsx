import React from 'react'
import Home from '../components/Home/Home'

const HomePage = () => {
  return (
<>
    <img src="/homebg.png" className="absolute w-1/3 bottom-0 right-0 opacity-10 animate-pulse"></img>
    <img src="/homebg.png" className="absolute w-1/3 top-0 left-0 opacity-10 animate-pulse"></img>
<Home/>
</>
  )
}

export default HomePage