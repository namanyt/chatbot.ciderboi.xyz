'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import { ServerActionResult } from '@/lib/types'
import { Button } from '@/components/ui/button'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { IconSpinner } from '@/components/ui/icons'

interface ClearHistoryProps {
	clearChats: () => ServerActionResult<void>
}

export function ClearHistory({ clearChats }: ClearHistoryProps) {
	const [open, setOpen] = React.useState(false)
	const [isPending, startTransition] = React.useTransition()
	const router = useRouter()

	return (
		<div className="text-white">
			<AlertDialog open={open} onOpenChange={setOpen}>
				<AlertDialogTrigger asChild>
					{/* @ts-ignore */}
					<Button variant="ghost" disabled={isPending} className="text-white">
						{isPending && <IconSpinner className="mr-2" />}
						Clear history
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>
							<span className="text-white">Are you absolutely sure?</span>
						</AlertDialogTitle>
						<AlertDialogDescription>
							This will permanently delete your chat history and remove your
							data from our servers.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel disabled={isPending}>
							{' '}
							<span className="text-white">Cancel</span>
						</AlertDialogCancel>
						<AlertDialogAction
							disabled={isPending}
							onClick={(event: any) => {
								event.preventDefault()
								startTransition(async () => {
									const result = await clearChats()

									if (result && 'error' in result) {
										toast.error(result.error)
										return
									}

									setOpen(false)
									router.push('/')
								})
							}}
						>
							{isPending && <IconSpinner className="mr-2 animate-spin" />}
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	)
}
