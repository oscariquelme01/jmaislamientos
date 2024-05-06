import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
  finalValue: number
  duration: number
}

const AnimatedValueOnScroll: React.FC<Props> = ({ finalValue, duration }) => {
  const [currentValue, setCurrentValue] = useState(0)
  const [isCounting, setIsCounting] = useState(false)
  const [ref, inView] = useInView()

  const stepDuration = duration / finalValue

  useEffect(() => {
    if (inView && !isCounting) {
      setIsCounting(true)
      const interval = setInterval(() => {
        setCurrentValue((prevValue) => {
          if (prevValue < finalValue) {
            return prevValue + 1
          } else {
            clearInterval(interval)
            return prevValue
          }
        })
      }, stepDuration)
    }
  }, [inView, finalValue, isCounting])

  return (
    <div ref={ref}>
      <span className='text-8xl text-blue-600 font-bold'>+{currentValue}</span>
    </div>
  )
}

export default AnimatedValueOnScroll
