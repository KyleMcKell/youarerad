import { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

export default function Cta() {
  const [animationData, setAnimationData] = useState()

  useEffect(() => {
    import('./cta.json').then(setAnimationData)
  }, [])

  if (!animationData) return <div>Loading...</div>
  return <Lottie loop play animationData={animationData} />
}
