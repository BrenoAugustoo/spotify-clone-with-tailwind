import { RecommendationCard } from '@/components/RecommendationCard'
import {
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Library,
  Play,
  Search,
  Shuffle,
  SkipBack,
  SkipForward,
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              daydreaming sleeper asff
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              dissociation in snippets
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Surto Violento
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              take my heart
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              smoll companies
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              moonlight
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              eleanor rigby
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              hey jude
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 text-white/50 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-bold text-3xl mt-10">Boa tarde</h1>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
          </div>

          <h2 className="font-bold text-2xl mt-10">Feito para você</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a className="bg-white/5 p-3  rounded-md hover:bg-white/10 flex flex-col gap-2 ">
              <Image
                src="/abbey-road.png"
                width={120}
                height={120}
                alt="Capa do Álbum Abbey Road da banda The Beatles"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-white/40">
                The Beatles, Loona, Mitski e mais
              </span>
            </a>
            <a className="bg-white/5 p-3  rounded-md hover:bg-white/10 flex flex-col gap-2 ">
              <Image
                src="/abbey-road.png"
                width={120}
                height={120}
                alt="Capa do Álbum Abbey Road da banda The Beatles"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-white/40">
                The Beatles, Loona, Mitski e mais
              </span>
            </a>
            <a className="bg-white/5 p-3  rounded-md hover:bg-white/10 flex flex-col gap-2 ">
              <Image
                src="/abbey-road.png"
                width={120}
                height={120}
                alt="Capa do Álbum Abbey Road da banda The Beatles"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-white/40">
                The Beatles, Loona, Mitski e mais
              </span>
            </a>
            <a className="bg-white/5 p-3  rounded-md hover:bg-white/10 flex flex-col gap-2 ">
              <Image
                src="/abbey-road.png"
                width={120}
                height={120}
                alt="Capa do Álbum Abbey Road da banda The Beatles"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-white/40">
                The Beatles, Loona, Mitski e mais
              </span>
            </a>
            <a className="bg-white/5 p-3  rounded-md hover:bg-white/10 flex flex-col gap-2 ">
              <Image
                src="/abbey-road.png"
                width={120}
                height={120}
                alt="Capa do Álbum Abbey Road da banda The Beatles"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-white/40">
                The Beatles, Loona, Mitski e mais
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/abbey-road.png"
            width={56}
            height={56}
            alt="Capa do Álbum Abbey Road da banda The Beatles"
          />
          <div className="flex flex-col">
            <strong className="font-normal">
              Here Comes The Sun - Remastered 2009
            </strong>
            <span className="text-xs text-zinc-400">The Beatles</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <Shuffle />
            <SkipBack />s
            <button className="w-10 h-10 flex items-center justify-center p-1 rounded-full bg-white text-black ml-auto">
              <Play />
            </button>
            <SkipForward />
          </div>
        </div>
        <div></div>
      </footer>
    </div>
  )
}
