import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Movie } from "@/models/MovieSchema"
import Image from "next/image"

type Props = {
  movie: Movie
  poster: string
  backdrop_poster: string
}

export default function MovieDetails({
  movie,
  poster,
  backdrop_poster,
}: Props) {
  return (
    <Sheet>
      <SheetTrigger className="group bg-accent px-2 py-3 rounded-lg">
        <div className="overflow-hidden flex-1">
          <Image
            src={poster}
            alt="broken"
            width={200}
            height={301}
            priority
            placeholder="blur"
            blurDataURL={movie.blurDataUrl}
            className="w-full rounded-md group-hover:scale-110 transition-transform ease-in"
          />
        </div>
        <p className="text-start">{movie.title}</p>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-4/5 rounded-t-xl lg:px-10">
        <div className="relative h-full overflow-y-auto">
          <div className="min-h-[20rem] flex justify-stretch">
            <div className="w-72 bg-background rounded-xl absolute top-72 left-1/2 -translate-x-1/2 md:translate-x-0 md:static z-20 p-2">
              <Image
                src={poster}
                alt="broken"
                width={300}
                height={450}
                priority
                placeholder="blur"
                blurDataURL={movie.blurDataUrl}
                className="w-full rounded-md"
              />

              <div>
                <SheetTitle>{movie.title}</SheetTitle>
                <SheetDescription>{movie.overview}</SheetDescription>
              </div>
            </div>
            <div
              className="relative flex-1 
              before:z-10 before:absolute before:h-full before:w-1/3 before:top-0 before:left-0 before:bg-gradient-to-r before:from-background before:to-black/0
              after:absolute after:h-full after:w-1/3 after:top-0 after:right-0 after:bg-gradient-to-l after:from-background after:to-black/0"
            >
              <Image
                src={backdrop_poster}
                alt="broken"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
