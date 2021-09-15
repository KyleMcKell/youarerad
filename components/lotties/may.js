import { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

const Mayhover = () => {
  const [animationData, setAnimationData] = useState()

  useEffect(() => {
    import('./May.json').then(setAnimationData)
  }, [])

  if (!animationData) return <div>Loading...</div>
  return <Lottie loop play animationData={animationData} />
}

export default Mayhover
