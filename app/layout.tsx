import "@/app/globals.css";
import type React from "react";
import { Coiny, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });
// const coiny = Coiny({
//   subsets: ["vietnamese"],
//   weight: "400",
// });

export const metadata = {
  title: "Odile baby store | Premium Baby Products",
  description:
    "Cửa hàng mẹ & bé nơi các anh hùng nhỏ tuổi nạp năng lượng với sữa ngon, bỉm êm, và thức ăn dặm bổ dưỡng. Tự hào được đồng hành, chăm sóc và tiếp thêm sức mạnh cho các chiến binh nhí.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
