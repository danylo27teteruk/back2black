import Link from "next/link"
import type React from "react"

type Item = {
  text: string,
  path: string
  icon?: string,
  selected?: boolean,
}

export const Item: React.FC<Item> = ({ text, path }) => (
  <Link href={path}>
    <div className="h-full p-4 hover:underline hover:font-bold transition-all">
      {text}
    </div>
  </Link>
)