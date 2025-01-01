import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex items-center justify-items-center w-full min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter-tight)]'>
      <main className='w-full flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <h2 className='text-6xl font-semibold'>Turborepo starter kit for Next.js apps</h2>
        <span className='mb-2 text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>A monorepo template designed to have everything you need to build with Next 15 & React 19. Free and open source, forever.</span>
        <Button>Read the docs</Button>
      </main>
    </div>
  )
}

