import { Footer } from '@/components/Footer'
import { RecommendationCard } from '@/components/RecommendationCard'
import { SideBar } from '@/components/SideBar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
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
      <Footer />
    </div>
  )
}
