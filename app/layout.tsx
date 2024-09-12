import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./component/NavBar";

export const metadata: Metadata = {
  title: "blog website ",
  description: "this is web for serv5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="robots" content="index, follow"/>
            <meta property="og:Store for buying products" content="Buy Men's Running Shoes | Brand Name"/>
            <meta property="twitter:Store for buying products" content="Buy Men's Running Shoes | Brand Name"/>
            <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="/>
            <meta name="robots" content="noindex,nofollow"/>
            <meta name="author" content="Mohamed Salah"/>
      </head>
      <body>
        <NavBar/>
        <div className="mt-[120px]">
          {children}
        </div>
      </body>
    </html>
  );
}
