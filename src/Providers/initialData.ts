import { InitialBookmarkGroup } from "@startpage/bookmarks"
import { getTheme } from "@startpage/preset"
import { SearchEngineName, SearchOptions } from "@startpage/search"

import { ShadowOptions } from "../Settings/Surface/fragments/ShadowStyle"

export const initialCustomCss = `/* You can put any css in here. For example:
#root > div {
  background-color: #373e4d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23579190' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
*/
`

export const initialGeneralSettings = {
  img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F3608b170-c7f8-4a0c-8ce9-918157ffa0d0%2Fd9ak7qd-14193d49-011b-4bfb-b56f-a97313897fb3.png%2Fv1%2Ffill%2Fw_1024%2Ch_625%2Cq_80%2Cstrp%2Fmakoto_shishio_by_adriano_arts_d9ak7qd-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI1IiwicGF0aCI6IlwvZlwvMzYwOGIxNzAtYzdmOC00YTBjLThjZTktOTE4MTU3ZmZhMGQwXC9kOWFrN3FkLTE0MTkzZDQ5LTAxMWItNGJmYi1iNTZmLWE5NzMxMzg5N2ZiMy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7BFIX7MDdM38yaztIk60AB2fOoKtk6CWP7UNQKk2Hq0&f=1&nofb=1&ipt=714e046d37892754869e521a24f254332b2ff643fb530c6e555d5b5225035cb3&ipo=images",
  title: "𝑡ℎ𝑖𝑠 𝑤𝑜𝑟𝑙𝑑 𝑖𝑠 ℎ𝑒𝑙𝑙 𝑖𝑡𝑠𝑒𝑙𝑓, 𝑑𝑜𝑛'𝑡 𝑦𝑜𝑢 𝑡ℎ𝑖𝑛𝑘?​",
  displayImg: true,
  font: "Ubuntu",
  enableFonts: false,
  fontSize: 1,
}

export const initialTheme = getTheme("nord")

export const initialSearchSettings = {
  placeholder: "Search the web",
  engine: "duckduckgo" as SearchEngineName,
  forwardingLookup: {
    "/": "/",
    deepl: "https://deepl.com/",
    reddit: "https://reddit.com/",
    maps: "https://maps.google.com/",
  } as SearchOptions["forwardingLookup"],
}

export const initialSurfaceSettings = {
  shadow: {
    amount: 3,
    blur: 6,
    offset: 12,
    shadow: "",
  } as ShadowOptions,
  borderRadius: 12,
  maxWidth: 1200,
}

export const initialBookmarks: InitialBookmarkGroup[] = [
   {
    label: "socials",
    bookmarks: [
      {
        label: "cord",
        url: "https://discord.com/channels/@me",
      },
      {
        label: "mail",
        url: "https://mail.google.com/",
      },
      {
        label: "'sup",
        url: "https://web.whatsapp.com/",
      },
      {
        label: "$",
        url: "https://drrr.com/",
      },
    ],
  },
  {
    label: "media",
    bookmarks: [
      {
        label: "bandcamp",
        url: "https://bandcamp.com/lavuan/wishlist",
      },
      {
        label: "spotify",
        url: "https://open.spotify.com/",
      },
      {
        label: "twitch",
        url: "https://www.twitch.tv/directory/following",
      },
      {
        label: "youtube",
        url: "https://www.youtube.com/",
      },
    ],
  },
  {
    label: "forum",
    bookmarks: [
      {
        label: "danger",
        url: "https://dangeru.us/",
      },
      {
        label: "reddit",
        url: "https://old.reddit.com/",
      },
      {
        label: "sgt",
        url: "https://www.steamgifts.com/",
      },
    ],
  },
  {
    label: "etc.",
    bookmarks: [
      {
        label: "steam",
        url: "https://steamcommunity.com/id/lav--/",
      },
      {
        label: "duo",
        url: "https://duolingo.com/learn",
      },
      {
        label: "dex",
        url: "https://mangadex.org/",
      },
    ],
  },
]
