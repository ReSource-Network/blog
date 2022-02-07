import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Custom404Page() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  })

  return null
}
