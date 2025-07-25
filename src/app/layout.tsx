import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui/app-sidebar";
import styles from './layout.module.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guia de terapia hormonal",
  description: "Guia de TH para mulheres trans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger className="fixed top-4 left-4 z-50 flex md:hidden ml-4" />
          {children}
        </SidebarProvider>
          <p className="absolute right-4  z-51 text-[10px]">
            Conteúdo: <strong>anthyuwu</strong> | Website: <strong>luna_voadora</strong></p>
      </body>
    </html>
  );
}
