import type { Metadata } from "next";
import Summary from "@/components/summary";
import styles from './page.module.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
import "./globals.css"; // 全局样式
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: any
}>) {
  return (
    <main style={{display: 'flex', height: '100vh'}}>
      <Suspense fallback={<></>}><Summary></Summary></Suspense>
      <div className={styles.content}>
        <div className={`${styles.title}`}>Interest is the best teacher, keep your passion for learning</div>
        <Header></Header>
        <Suspense fallback={<></>}><div style={{flex: '1'}}>{children}</div></Suspense>
        <Footer></Footer>
      </div>
    </main>
  );
}
