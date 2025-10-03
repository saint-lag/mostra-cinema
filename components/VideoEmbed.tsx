"use client";

import * as React from "react";

type Props = {
  youtubeId: string;
  title: string;
  className?: string;
};

export default function VideoEmbed({ youtubeId, title, className }: Props) {
  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`;

  return (
    <div className={className}>
      <div 
        className="relative w-full overflow-hidden rounded-xl shadow-lg" 
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
