import { Search } from 'lucide-react'
import { ComponentProps } from 'react'

type IInputPrefix = ComponentProps<'div'>

export function Prefix(props: IInputPrefix) {
  return <div {...props} />
}

type IInputControl = ComponentProps<'input'>

export function Control(props: IInputControl) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-400"
      {...props}
    />
  )
}

type IInputRoot = ComponentProps<'div'>

export function Root(props: IInputRoot) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
