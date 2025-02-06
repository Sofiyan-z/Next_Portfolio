// // Header.tsx
import GithubIcon from './icons/github-icon';
import XIcon from './icons/Twitter';
import LinkedinIcon from './icons/Linkedin';
import { Section } from './Section';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className='sticky top-0'>
      <Section className='flex items-baseline'>
        <h1 className='text-4xl font-bold text-primary-foreground'>
          SofiYandex
        </h1>
        <div className='flex-1'>
          <ul>
            <Button className='size-6'>
              <GithubIcon size={16} className='text-foreground' />
            </Button>
          </ul>
        </div>
      </Section>
    </header>
  );
};
// _components/Header.tsx

// const Header = () => {
//   return (
//     <header>
//       Header Content
//       <GithubIcon className='text-foreground' />
//       <XIcon />
//       <LinkedinIcon />
//     </header>
//   );
// };

export default Header; // Default export
