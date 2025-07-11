// 导入 React 相关依赖
import React from "react";
// 导入 Next.js 的 Link 组件用于页面跳转
import Link from "next/link";
// 导入用于切换深色模式的按钮（可后续扩展）
// import { ThemeToggle } from "./theme-toggle";

// 定义导航项数组，方便后续维护和扩展
const navItems = [
  { label: "简历", href: "/resume" },
  { label: "研究兴趣", href: "/research" },
  { label: "读书笔记", href: "/notes" },
  { label: "博客", href: "/blog" },
  { label: "出版物", href: "/publications" },
];

// 导出 Header 组件，采用 export const 格式，便于按需引入
export const Header = () => {
  return (
    // 头部导航栏，使用 Tailwind CSS 实现响应式和配色
    <header
      className="fixed top-0 left-0 w-full z-50 border-b border-sky-100/20 bg-sky-50/80 dark:bg-zinc-900/80 backdrop-blur supports-[backdrop-filter]:bg-sky-50/60 dark:supports-[backdrop-filter]:bg-zinc-900/60"
    >
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        {/* 网站 Logo 或姓名，可替换为你的名字 */}
        <div className="font-bold text-lg text-sky-600 dark:text-sky-400 tracking-tight select-none">
          学术主页
        </div>
        {/* 导航链接区域，flex 布局，gap 控制间距，响应式隐藏/显示 */}
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              {/* Link 组件用于页面跳转，hover 时变色，深色模式适配 */}
              <Link
                href={item.href}
                className="transition-colors px-2 py-1 rounded text-zinc-700 dark:text-zinc-300 hover:bg-sky-100 hover:text-sky-600 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* 预留主题切换按钮位置，可后续添加 */}
        {/* <ThemeToggle /> */}
      </nav>
    </header>
  );
};