import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Toggle } from "@/components/ui/toggle"

import { Button } from "./button"
import { ScrollArea } from "./scroll-area"

export default function MenuBar() {
  return (
    <nav>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="w-72 flex flex-col pe-2">
          <SheetHeader>
            <SheetTitle className="text-start">Categories</SheetTitle>
          </SheetHeader>

          <ScrollArea className="flex-1 pe-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Movies</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 p-2">
                    {["Popular", "Now Playing", "Upcoming", "Top Rated"].map(
                      (v, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          className="justify-start"
                        >
                          {v}
                        </Button>
                      )
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Tv Shows</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 p-2">
                    {["Popular", "Airing Today", "On Tv", "Top Rated"].map(
                      (v, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          className="justify-start"
                        >
                          {v}
                        </Button>
                      )
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 mb-4">
              <h4>Genres</h4>
              <div className="grid grid-cols-2 gap-1 text-sm p-2">
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <Toggle key={i} className="justify-start">
                      <p className="text-sm">Lorem</p>
                    </Toggle>
                  ))}
              </div>
            </div>
            <div>
              <h4>Country</h4>
              <div className="grid grid-cols-2 gap-1 text-sm p-2">
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <Toggle key={i} className="justify-start">
                      <p className="text-sm">Lorem</p>
                    </Toggle>
                  ))}
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
