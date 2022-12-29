import React from 'react'
import Center from '../pages/Center';
import Rightside from '../pages/Rightside';

const Homepage = () => {
  return (
    <div className='flex home'>
      <div className='center'>
        <Center />
      </div>
      <div className='right'>
        <Rightside />
      </div>
    </div>
  )
}

export default Homepage;