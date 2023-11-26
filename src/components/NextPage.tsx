"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export default function NextPage({ page }: { page: number }) {
  const router = useRouter()

  return (
    <div className="flex justify-center w-full">
      <Button onClick={() => router.push(`/movies/${page}`)}>Next Page</Button>
    </div>
  )
}
