import { z } from "zod"

const MovieDetailsSchema = z.object({
  id: z.number(),
  title: z.string().optional(),
  tagline: z.string().optional(),
  overview: z.string().optional(),
  runtime: z.number().optional(),
  release_date: z.string().optional(),
  vote_average: z.number().optional(),
  homepage: z.string().optional(),

  poster_path: z.string(),
  blurDataUrl: z.string().optional(),
  backdrop_path: z.string().optional(),
  budget: z.number().optional(),
  genres: z
    .array(
      z
        .object({
          id: z.number().optional(),
          name: z.string().optional(),
        })
        .optional()
    )
    .optional(),

  production_companies: z
    .array(
      z
        .object({
          logo_path: z.string(),
          name: z.string(),
        })
        .optional()
    )
    .optional(),
})

export const MoviesSchema = z.object({
  results: z.array(MovieDetailsSchema),
})

export type Movie = z.infer<typeof MovieDetailsSchema>
export type Movies = z.infer<typeof MoviesSchema>
