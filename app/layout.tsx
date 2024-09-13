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
