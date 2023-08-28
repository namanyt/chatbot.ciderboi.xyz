import { Metadata } from 'next'

import { Toaster } from 'react-hot-toast'

import '@/app/globals.css'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'

export const metadata: Metadata = {
	title: {
		default: 'Ahri AI',
		template: `%s - Ahri AI`
	},
	description: 'An AI-powered chatbot',
	metadataBase: new URL('https://https://5ffd-103-59-75-117.ngrok-free.app'),
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' }
	],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png'
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://chatbot.ciderboi.xyz',
		siteName: 'Ahri AI',
		images: [
			{
				url: './favicon-16x16.png',
				width: 1200,
				height: 630,
				alt: 'Ahri AI'
			}
		]
	},
	twitter: {
		site: 'chatbot.ciderboi.xyz',
		title: 'Ahri AI',
		card: 'summary_large_image',
		description: 'An AI-powered chatbot',
		images: ['./og.png'],
		creator: '@ciderboi'
	}
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					'font-sans antialiased',
					fontSans.variable,
					fontMono.variable
				)}
			>
				<Toaster />
				<Providers attribute="class" defaultTheme="system" enableSystem>
					<div className="flex flex-col min-h-screen">
						{/* @ts-ignore */}
						<Header />
						<main className="flex flex-col flex-1 bg-muted/50">{children}</main>
					</div>
					{/* <TailwindIndicator /> */}
				</Providers>
			</body>
		</html>
	)
}
