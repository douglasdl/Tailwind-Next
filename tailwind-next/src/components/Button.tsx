import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 outline-none',
    'active: opacity-80',
  ],
  variants: {
    variant: {
      primary:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-500',
      ghost:
        'rounded-md p-2 hover:bg-zinc-50 dark:hover:bg-white/5 shadow-none text-zinc-500 dark:text-zinc-400',
      dismiss:
        'font-medium text-violet-500 hover:text-violet-700 dark:text-violet-300 dark:hover:text-violet-200',
      upgrade:
        'font-medium text-violet-700 hover:text-violet-900 dark:text-violet-200 dark:hover:text-violet-100',
      outline:
        'border border-zinc-300 text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type IButton = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: IButton) {
  return <button className={button({ variant, className })} {...props} />
}
