import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-items-center w-full font-[family-name:var(--font-inter-tight)]'>
      <div style={{ backgroundSize: '22.05px auto', backgroundPosition: 'top left', opacity: '0.1' }} className='absolute h-full top-0 right-0 left-0 -z-1 bg-repeat bg-[url(https://framerusercontent.com/images/zkZcqLYKrbf3IcoLGmkQF4odXvY.svg)]'></div>
      <div className='absolute w-full top-0 right-0 left-0 z-10 border-b h-16'></div>
      <main className='flex justify-center h-screen w-full'>
        <div className='lg:w-[948px] bg-white border-x w-full flex flex-col justify-start gap-8 items-center z-10'>
          <div className='h-16 w-full text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] py-4 px-2 border-b'>⚡Next 15 Starter kit</div>
          {/* <h2 className='text-6xl font-semibold'>Turborepo starter kit for Next.js apps</h2>
          <span className='mb-2 text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>A monorepo template designed to have everything you need to build with Next 15 & React 19. Free and open source, forever.</span>
          <Button>Read the docs</Button> */}
        </div>
      </main>
    </div>
  )
}

