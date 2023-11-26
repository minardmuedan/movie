import Link from "next/link"

import MovieFetch, { getImage } from "@/lib/MovieFetch"
import { Movies } from "@/models/MovieSchema"
import addBlurredPosters from "@/lib/Base64"
import { Frown } from "lucide-react"
import { Button } from "@/components/ui/button"
import NextPage from "@/components/NextPage"
import MovieDetails from "../MovieDetails"

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
    <main className="flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 p-5">
        {moviesWblurredPosters.map((movie) => (
          <MovieDetails
            key={movie.id}
            movie={movie}
            poster={getImage(movie.poster_path)}
            backdrop_poster={getImage(movie.backdrop_path)}
          />
        ))}
      </div>
      <NextPage page={Number(params.page) + 1} />
    </main>
  )
}
