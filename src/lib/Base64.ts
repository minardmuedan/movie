import { Movies } from "@/models/MovieSchema"
import { getPlaiceholder } from "plaiceholder"

export async function getBase64(url: string | undefined) {
  const response = await fetch(`https://image.tmdb.org/t/p/original${url}`)

  if (!response.ok) {
    throw new Error("failed to fetch the image")
  }
  const buffer = await response.arrayBuffer()
  const { base64 } = await getPlaiceholder(Buffer.from(buffer))
  return base64
}

export default async function addBlurredPosters(movies: Movies) {
  const base64Promises = movies.results.map((movie) =>
    getBase64(movie.poster_path)
  )

  const base64Results = await Promise.all(base64Promises)

  const moviePosterWithBlur = movies.results.map((movie, index) => {
    movie.blurDataUrl = base64Results[index]
    return movie
  })

  return moviePosterWithBlur
}
