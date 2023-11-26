"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

type NavlinksType = {
  title: string
  width?: string
  gridCols: string
  datas: {
    label: string
    path: string
    desciption?: string
  }[]
}

export default function Navigations() {
  const navlinks: NavlinksType[] = Navlinks()
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navlinks.map((navlink, i) => (
          <NavigationMenuItem key={i}>
            <NavigationMenuTrigger>{navlink.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div
                className={`grid ${navlink.gridCols} ${
                  navlink.width ? navlink.width : "w-96"
                } gap-1 p-3`}
              >
                {navlink.datas.map((data, x) => (
                  <NavigationMenuLink key={x}>
                    <Link href={data.path}>
                      <div className="h-full rounded-lg p-4 hover:bg-primary/50">
                        <h5>{data.label}</h5>
                        {data.desciption && (
                          <p className="text-muted-foreground">
                            {data.desciption}
                          </p>
                        )}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// navlinks ***********************************************************
function Navlinks(): NavlinksType[] {
  const navlinks: NavlinksType[] = [
    {
      title: "Movies",
      gridCols: "grid-cols-2",
      datas: [
        {
          label: "Popular",
          path: "/movies/popular",
          desciption: "watch your favorite Popular movies",
        },
        {
          label: "Now Playing",
          path: "/movies/now-playing",
          desciption: "watch your favorite Popular movies",
        },
        {
          label: "Upcoming",
          desciption: "watch your favorite Popular movies",
          path: "/movies/upcoming",
        },
        {
          label: "Top Rated",
          desciption: "watch yoasdasds asdur favorite Popular movies",
          path: "/movies/top-rated",
        },
      ],
    },

    {
      title: "Tv Shows",
      gridCols: "grid-cols-2",
      datas: [
        {
          label: "Popular",
          path: "/",
          desciption: "watch your favorite Popular movies",
        },
        {
          label: "Airing Today",
          path: "/",
          desciption: "watch your favorite Popular movies",
        },
        {
          label: "On Tv",
          desciption: "watch your favorite Popular movies",
          path: "/",
        },
        {
          label: "Top Rated",
          desciption: "watch yoasdasds asdur favorite Popular movies",
          path: "/",
        },
      ],
    },
    {
      title: "More",
      gridCols: "grid-cols-1",
      width: "w-80",
      datas: [
        {
          label: "Minard's Portfolio",
          path: "/",
        },
        {
          label: "More Minard's Websites",
          path: "/",
        },
      ],
    },
  ]

  return navlinks
}
