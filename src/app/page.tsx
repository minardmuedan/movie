import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto">
      <h1 className="text-2xl">Home Page</h1>
      <Link href="/movies">
        <Button className="gap-2 group">
          Movies
          <MoveRight className="group-hover:translate-x-1 transition-transform ease-in-out" />
        </Button>
      </Link>
    </main>
  )
}
