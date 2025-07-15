// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // 或你选择的字体
import "./globals.css"; // Tailwind 基础样式

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// 更新网站的元数据
export const metadata: Metadata = {
  title: "Prompt Manager",
  description: "Organize and manage your AI prompts efficiently.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        // 应用字体变量和基础的背景/文本颜色
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        {/* children 代表当前页面的内容 */}
        {children}
      </body>
    </html>
  );
}