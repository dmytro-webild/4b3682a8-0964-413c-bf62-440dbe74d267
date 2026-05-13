import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Figtree } from "next/font/google";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: '鋒源機械有限公司 | 高精度工業4.0自動化設備',
  description: '專業的高速包裝機製造商，提供德國技術整合、FY與FASP系列高效能工業解決方案。提升您的自動化產能。',
  openGraph: {
    "title": "鋒源機械：自動化包裝專家",
    "siteName": "鋒源機械有限公司"
  },
};





const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
