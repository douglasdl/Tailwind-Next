'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type IControl = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: IControl) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
