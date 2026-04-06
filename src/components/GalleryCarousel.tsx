"use client";

import Image from "next/image";

interface GalleryImage {
  src: string;
  label: string;
}

export function GalleryCarousel({ images }: { images: readonly GalleryImage[] }) {
  const doubled = [...images, ...images];

  return (
    <div className="group relative">
      <div className="flex w-max gap-5 animate-filmstrip-scroll group-hover:[animation-play-state:paused]">
        {doubled.map((img, i) => (
          <div
            key={`${img.label}-${i}`}
            className="relative h-44 w-64 flex-shrink-0 overflow-hidden rounded-lg border border-primary-700/40 shadow-lg shadow-primary-950/50 md:h-56 md:w-80"
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 256px, 320px"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="rounded bg-primary-950/60 px-2 py-1 text-sm font-medium text-primary-100/90 backdrop-blur-sm">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
