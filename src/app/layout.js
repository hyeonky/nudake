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
    url: 'http://www.mysite.com/article/article1.html',
    images: [
      {
        url: 'http://www.mysite.com/article/article1_featured_image.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'NUDAKE • 조현경',
    description: '리뉴얼 사이트',
    images: ['http://www.mysite.com/article/article1.html'],
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
