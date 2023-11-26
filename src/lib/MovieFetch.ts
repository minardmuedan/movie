export default async function MovieFetch(url: string) {
  const response = await fetch(url + "api_key=" + process.env.TMDB_API_KEY)
  const moviesResults = await response.json()

  if (!moviesResults) return undefined
  return moviesResults
}

export function getImage(src: string | undefined) {
  return "https://image.tmdb.org/t/p/original" + src
}
