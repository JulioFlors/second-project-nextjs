import localFont from 'next/font/local'
import { Sidebar } from '@/components';
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const flexo = localFont({
  src: [
    {
      path: './fonts/Flexo-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Flexo-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Flexo-Demi.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Flexo-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-flexo',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ViveroOnline.',
  description: 'Tu vivero online, toda nuestra experiencia a tu alzance',
  keywords: [
    'cactus y suculentas',
    'cactus',
    'jardineria',
    'macetas 3D',
    'macetas',
    'orquideas',
    'plantas',
    'porrones 3D',
    'porrones',
    'robert plant',
    'suculentas',
    'Vivero Online',
    'Vivero',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${flexo.variable}`}>
      <body className={inter.className}>
        <div className="bg-white overflow-y-auto w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

          <div className="flex">

            <Sidebar />

            <div className="w-full text-slate-900">
              {children}
            </div>

          </div>
        </div>
      </body>
    </html>
  );
}
