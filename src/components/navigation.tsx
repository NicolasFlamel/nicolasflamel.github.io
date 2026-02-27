import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export const Navigation = () => {
  const pages = ['about', 'projects', 'resume'];

  const getHeader = (page: string) => {
    switch (page) {
      case 'about':
        return 'About Me';
      case 'projects':
        return 'Projects';
      case 'resume':
        return 'Resume';
      default:
        return 'About Me';
    }
  };

  return (
    <nav className={cn('flex justify-center sticky top-2 w-full m-4 z-50')}>
      <ol
        className={
          'flex flex-wrap list-none justify-center backdrop-blur-sm bg-background/40 rounded-md'
        }
      >
        {pages.map((page) => {
          return (
            <li key={page}>
              <Button asChild variant={'link'}>
                <a href={'#' + page}>{getHeader(page)}</a>
              </Button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
