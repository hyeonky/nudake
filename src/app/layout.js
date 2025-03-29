import '@/styles/globals.scss'
import { Providers } from '@/components/providers'
import SkipNav from '@/components/layout/header/SkipNav'

export const metadata = {
  title: 'next.js template',
  description: '리뉴얼 사이트',
  openGraph: {
    title: 'NUDAKE • 조현경',
    description: '리뉴얼 사이트',
    type: 'website',
    url: 'https://nudake.vercel.app/',
    images: [
      {
        url: 'https://private-user-images.githubusercontent.com/181046564/428330418-450a9f88-e9f6-45b8-8f1f-ba6f3222321b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDMyNjUzNjgsIm5iZiI6MTc0MzI2NTA2OCwicGF0aCI6Ii8xODEwNDY1NjQvNDI4MzMwNDE4LTQ1MGE5Zjg4LWU5ZjYtNDViOC04ZjFmLWJhNmYzMjIyMzIxYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyOVQxNjE3NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xM2U1Mzk3ZDY2Y2U4MTQ3ZTQ1NzdhMWFiZDZhODU3MmQxNGZkNjcwNThhMGY3MWFiNWQ3ZDE3NGY3NDlmMGViJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.13lRSZPJop_BmKJcyyFX-OVhslXVeAJRtUJgBUloO8Y',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'NUDAKE • 조현경',
    description: '리뉴얼 사이트',
    images: [
      'https://private-user-images.githubusercontent.com/181046564/428330418-450a9f88-e9f6-45b8-8f1f-ba6f3222321b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDMyNjUzNjgsIm5iZiI6MTc0MzI2NTA2OCwicGF0aCI6Ii8xODEwNDY1NjQvNDI4MzMwNDE4LTQ1MGE5Zjg4LWU5ZjYtNDViOC04ZjFmLWJhNmYzMjIyMzIxYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyOVQxNjE3NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xM2U1Mzk3ZDY2Y2U4MTQ3ZTQ1NzdhMWFiZDZhODU3MmQxNGZkNjcwNThhMGY3MWFiNWQ3ZDE3NGY3NDlmMGViJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.13lRSZPJop_BmKJcyyFX-OVhslXVeAJRtUJgBUloO8Y',
    ],
    creator: 'NUDAKE • 조현경',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <Providers>
          <SkipNav />
          <div id="wrap" className="min-h-svh flex flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
