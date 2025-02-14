import React from 'react'
import { Section } from './Section'
import Image from 'next/image'
export default function Hero() {
  return (
    <Section className='flex max-md:flex-col items-start'>
      <div className='flex-[2]'>
        <h1 className='text-2xl font-bold mb-2'>Hi all. I am</h1>
        <h2 className='text-xl font-semibold mb-2'>Sofyaz Dave</h2>
        <p className='text-lg mb-4'>Front-end developer</p>
        <div className='italic'>
          <p>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className='flex-1'>
        <Image
          src='/images/sofiane.jpg' // Chemin absolu
          alt='Profile Picture'
          width={100}
          height={100}
          className='rounded-full'
        />
      </div>
    </Section>
  )
}
