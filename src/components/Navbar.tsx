import Link from "next/link"

import MenuBar from "./ui/MenuBar"
import { ModeToggle } from "./ui/ModeToggle"
import Navigations from "./ui/Navigations"
import SearchModal from "./ui/SearchModal"

export default function Navbar() {
  return (
    <nav className="h-14 flex items-center justify-between px-10">
      <menu className="md:hidden">
        <MenuBar />
      </menu>

      <Link href="/">MINARD</Link>

      <div className="hidden md:block">
        <Navigations />
      </div>

      <div className="flex items-center gap-5">
        <ModeToggle />
        <SearchModal />
      </div>
    </nav>
  )
}
