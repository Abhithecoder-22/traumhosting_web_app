// import * as React from "react"
import { ScrollArea, ScrollBar } from "../../../shadcn/components/ui/scroll-area"


export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "/assets/images/node.png",
  },
  {
    artist: "Tom Byrom",
    art: "/assets/images/wordpress.png",
  },
  {
    artist: "Vladimir Malyavko",
    art: "/assets/images/php.png",
  },
  {
    artist: "Vladimir Malyavko",
    art: "/assets/images/cpanel.png",
  },
  {
    artist: "Vladimir Malyavko",
    art: "/assets/images/ssl.png",
  },
  {
    artist: "Vladimir Malyavko",
    art: "/assets/images/mysql.png",
  },
]

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className=" scroll-content flex w-max space-x-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
           <div className="overflow-hidden rounded-md img-section w-[250px] h-[250px] p-4">
  <img
    src={artwork.art}
    alt={`Photo by ${artwork.artist}`}
   className="w-full h-full object-contain"
  />
</div>

            {/* <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption> */}
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
