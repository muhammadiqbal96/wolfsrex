import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import NextAuthProvider from "@/utils/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WOLFSREX - Trade, earn, repeat.",
  description: "Refering to the buying and selling of stocks, bonds, commodities, currencies, or other financial securities for a short period to earn profits",
};

export default function RootLayout({ children }) {

  const session = getServerSession();

  return (
    <html lang="en">
      <head>

        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />

      </head>
      <body className={inter.className}>
        <NextAuthProvider session={session}>
          {children}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
          <script src="https://kit.fontawesome.com/7f7635b985.js" crossOrigin="anonymous"></script>
        </NextAuthProvider>
      </body>
    </html>
  );
}
