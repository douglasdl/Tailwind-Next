import { Button } from '@/components/Button'

export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700 dark:text-zinc-100">
          Used space
        </span>
        <p className="text-sm/5 text-violet-500 dark:text-zinc-400">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100 dark:bg-zinc-600">
        <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400"></div>
      </div>

      <div className="space-x-3">
        <Button type="button" variant="dismiss">
          Dismiss
        </Button>
        <Button type="button" variant="upgrade">
          Upgrade Plan
        </Button>
      </div>
    </div>
  )
}
