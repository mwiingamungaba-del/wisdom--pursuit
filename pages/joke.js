import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function JokeRedirect(){
  const router = useRouter()
  useEffect(()=>{ router.replace('/') },[router])
  return null
}
