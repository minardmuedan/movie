import Image from "next/image"
import Link from "next/link"

import MovieFetch, { getImage } from "@/lib/MovieFetch"
import { Movies } from "@/models/MovieSchema"
import addBlurredPosters from "@/lib/Base64"
import MovieDetails from "./MovieDetails"
import NextPage from "@/components/NextPage"

export default async function Movies() {
  const page = 3
  const movies: Movies = await MovieFetch(
    `https://api.themoviedb.org/3/discover/movie?page=${page}&`
  )

  if (!movies.results[0].title) {
    return (
      <main>
        <h1>cant fetch any movies</h1>
      </main>
    )
  }

  const moviesWblurredPosters = await addBlurredPosters(movies)

  return (
    <main>
      <div className="h-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-5">
        {moviesWblurredPosters.map((movie) => (
          <MovieDetails
            key={movie.id}
            movie={movie}
            poster={getImage(movie.poster_path)}
            backdrop_poster={getImage(movie.backdrop_path)}
          />
        ))}
      </div>
    </main>
  )
}
