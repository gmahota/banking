'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount=0}:{amount :number}) => {
  return (
    <div className='w-full'><CountUp duration={2} end={amount} prefix='$'/></div>
    
  )
}

export default AnimatedCounter