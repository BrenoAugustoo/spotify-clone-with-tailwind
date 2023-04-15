'use client'
import Image from 'next/image'
import { Play } from 'phosphor-react'

export function RecommendationCard() {
  return (
    <a
      href="#"
      className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
    >
      <Image
        src="/abbey-road.png"
        width={80}
        height={80}
        alt="Capa do Álbum Abbey Road da banda The Beatles"
      />
      <strong>Abbey Road</strong>
      <button className="w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible tranistion-colors">
        <Play weight="fill" size={20} />
      </button>
    </a>
  )
}
