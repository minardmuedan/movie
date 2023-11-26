import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search } from "lucide-react"

export default function SearchModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Search />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ready to find what you need?</DialogTitle>
          <div className="pt-3">
            <div className="flex items-center border-2 rounded-lg px-4 gap-3">
              <input
                type="text"
                id="search"
                placeholder="search"
                className="flex-1 bg-transparent py-2 focus:outline-none"
              />

              <Search />
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
