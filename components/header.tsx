// components/header.tsx
"use client"; // usePathname 钩子需要此指令
import { motion } from "framer-motion";
import { BookMarked } from "lucide-react"; // 图标 (如果需要，请安装: npm i lucidereact)
import Link from "next/link";
import { usePathname } from "next/navigation"; // 用于获取当前路径的 Hook
export const Header = () => {
const pathname = usePathname(); // 获取当前路由
// 定义导航链接
const navItems = [
{ name: "Home", href: "/" },
{ name: "Prompts", href: "/prompts" },
];
return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80
    backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
    {/* max-w-6xl mx-auto px-4... 用于保持内容宽度一致 */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
    {/* Logo 部分 */}
    <motion.div /* ... 动画属性 ... */
    className="flex items-center gap-2"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    >
    <BookMarked className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    <span className="text-lg font-semibold text-gray-900 dark:text-white">
    Prompt Manager
    </span>
    </motion.div>
    {/* 导航链接 */}
    <nav className="flex items-center gap-6">
    {navItems.map((item, index) => (
    <motion.div /* ... 动画属性 ... */
    key={item.href}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    >
    <Link
    href={item.href}
    className={`text-sm font-medium transition-colors hover:text-blue600 dark:hover:text-blue-400 ${
    // 活动链接的条件样式
    pathname === item.href
    ? "text-blue-600 dark:text-blue-400" // 激活样式
    : "text-gray-600 dark:text-gray-300" // 默认样式
    }`}
    >
    {item.name}
    </Link>
    </motion.div>
    ))}
    </nav>
    </div>
    </div>
    </header>
    );
};