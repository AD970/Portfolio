'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
type Props = {}

export default function NotFoundComponent({}: Props) {
    const pathname = usePathname()
  return (
    <div className='flex flex-col p-4 gap-4 text-center  items-center '>
        <h1 className='text-6xl font-bold'>404</h1>
        <p className='text-2xl'>Page not found: {pathname}</p>
    </div>
  )
}