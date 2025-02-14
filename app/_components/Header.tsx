// // Header.tsx
import GithubIcon from './icons/GithubIcon'
import XIcon from './icons/Twitter'
import LinkedinIcon from './icons/Linkedin'
import { Section } from './Section'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='sticky top-0 py-4'>
      <Section className='flex items-baseline'>
        <h1 className='text-lg font-bold text-primary-foreground'>Sofiyan</h1>
        <div className='flex-1' />
        <ul className='flex items-center gap-2'>
          <Link href='https://github.com/Sofiyan-z'>
            <GithubIcon size={12} className='text-foreground' />
          </Link>
          <Link href='https://github.com/Sofiyan-z'>
            <XIcon size={12} className='text-foreground' />
          </Link>{' '}
          <Link href='https://github.com/Sofiyan-z'>
            <LinkedinIcon size={12} className='text-foreground' />
          </Link>
        </ul>
      </Section>
    </header>
  )
}

export default Header // Default export
