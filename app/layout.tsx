import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Context Leak Scanner — Detect Sensitive Data in AI Prompts',
  description: 'Scan AI prompts for accidentally included API keys, passwords, and PII before sending. Protect your team from data leaks in ChatGPT, Claude, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9800bd43-e010-4798-9e3d-10ca5c8a321a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
