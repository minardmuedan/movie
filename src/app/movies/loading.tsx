import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 p-5">
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <AspectRatio ratio={15 / 25} className="flex flex-col gap-1">
              <Skeleton className="rounded-xl flex-1" />
              <Skeleton className="h-5 w-1/2"></Skeleton>
            </AspectRatio>
          </div>
        ))}
    </div>
  )
}
