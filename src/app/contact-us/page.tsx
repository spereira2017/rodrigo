'use client'

import { useState } from 'react'
// import Image from 'next/image'

export default function ContactUs() {

  const [active, setActive] = useState(false)
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Contact Us - Active {active}
      <button className="" onClick={() => setActive(!active)}>Button</button>
    </main>
  )
}
