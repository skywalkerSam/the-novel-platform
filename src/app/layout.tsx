import "./globals.css";
import { Geist, Geist_Mono, Figtree, Paprika } from "next/font/google";
import { type Metadata } from "next";
import { ThemeProvider } from "~/components/ui/theme-provider";
import NavBar from "~/components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import Footer from "~/components/Footer";
// import "easymde/dist/easymde.min.css";  // sanity-plugin-markdown

// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "The Novel",
  },
  description: "The Novel Platform.",
  metadataBase: new URL("https://novel.skywalkersam.dev/"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const paprika = Paprika({
  variable: "--font-paprika",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={figtree.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${paprika.variable} antialiased`}
      >
        {/* <body className={`${paprika.className} antialiased`}> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            {/* Avoid using `<ClerkProvider>` wrapper at the root of your layout, for _Sanity_ studio brings its own auth layer. */}
            <NavBar></NavBar>
          </ClerkProvider>
          <main>{children}</main>
          {/* <Footer></Footer> */}
        </ThemeProvider>
        {/* <SpeedInsights></SpeedInsights> */}
      </body>
    </html>
  );
}
