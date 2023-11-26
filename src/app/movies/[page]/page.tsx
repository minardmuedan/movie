import Image from "next/image"
import Link from "next/link"

import MovieFetch, { getImage } from "@/lib/MovieFetch"
import { Movies } from "@/models/MovieSchema"
import addBlurredPosters from "@/lib/Base64"
import { Frown } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  params: {
    page: string
  }
}

export default async function Movies({ params }: Props) {
  const page = params.page
  const movies: Movies = await MovieFetch(
    `https://api.themoviedb.org/3/discover/movie?page=${page}&`
  )

  if (!movies.results)
    return (
      <main className="flex flex-col items-center justify-center gap-2">
        <div className="flex gap-2">
          <h1 className="text-3xl font-bold">No Movies Found!</h1>
          <Frown size={40} strokeWidth={2} />
        </div>

        <Link href="/">
          <Button size="lg">HOME</Button>
        </Link>
      </main>
    )

  const moviesWblurredPosters = await addBlurredPosters(movies)

  return (
    <main>
      <div className="h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 p-5">
        {moviesWblurredPosters.map((movie) => (
          <div
            key={movie.id}
            className="group rounded-lg mb-2 flex flex-col gap-1 px-2 h-full py-3 bg-accent"
          >
            <div className="overflow-hidden">
              <Image
                src={getImage(movie.poster_path)}
                alt="broken"
                width={200}
                height={301}
                priority
                className="w-full rounded-md group-hover:scale-110 transition-transform ease-in"
              />
            </div>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
