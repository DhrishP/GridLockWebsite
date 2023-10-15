import "./globals.css";
import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TanstackProvider from "@/providers/tanstack-provider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] ,weight:['400','500','600','700']});  

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar/>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
