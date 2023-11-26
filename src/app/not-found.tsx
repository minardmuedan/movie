import { Button } from "@/components/ui/button"
import { PawPrint } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex items-center justify-center">
      <div className="absolute bottom-1 right-1">
        <PawPrint size={150} className="-rotate-90 text-primary opacity-50" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          The Cat Ate This Page
        </h1>

        <p className="text-muted-foreground">
          The requested URL was not found on this server.
        </p>

        <div className="mt-4">
          <Link href="/">
            <Button size="lg">Home</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
