import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function WeatherRedirect(){
  const router = useRouter()
  useEffect(()=>{ router.replace('/') },[router])
  return null
}
