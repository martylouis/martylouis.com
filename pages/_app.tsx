import "../styles/global.css"

import { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="system"
    >
      <div className={`${inter.variable} font-sans`}>
        <Component key={router.route} {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
