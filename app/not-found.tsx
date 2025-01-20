import NotFoundComponent from '@/components/NotFoundComponent'
import React from 'react'

type Props = {}

export default function notfound({}: Props) {
  return (
    <div className='bg-base-300 flex items-center justify-center h-screen'>
      <NotFoundComponent />
    </div>
  )
}