"use client";
 import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
 import { motion } from "framer-motion";
 import Image from "next/image";
 // 项目数据类型定义
interface Project {
 title: string;
 description: string;
 tags: string[];
 githubLink?: string;
 demoLink?: string; 
image: string; // 图片路径(相对于public/projects)
 }
 export default function ProjectsPage() {
 // 项目数据 - 替换为您真实项目
const projects: Project[] = [
 {
 title: "个人作品集网站",
 description: "基于Next.js和Tailwind CSS构建的现代化作品集",
 tags: ["Next.js", "React", "Tailwind"],
 githubLink: "https://github.com/yourname/portfolio",
 demoLink: "https://your-portfolio.vercel.app",
 image: "portfolio.webp"
 },
 // 添加更多项目...
 ];
 // 动画配置
const container = {
 hidden: { opacity: 0 },
 show: { opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};
return (
  <div className="max-w-7xl mx-auto px-4 py-12">
    {/* 页面标题 */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 
text-transparent bg-clip-text mb-4">
        我的项目
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        以下是我开发的部分项目展示
      </p>
    </motion.div>
    {/* 项目网格 */}
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project, index) => (
        <motion.div key={index} variants={item} whileHover={{ y: -5 }}>
          <Card className="h-full overflow-hidden border-sky-100/20 shadow-sm 
hover:shadow-lg transition-shadow">
            {/* 项目封面图 */}
            <div className="relative h-48">
              <Image src={`/projects/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                
                {/* 技术标签 */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-sky-100 dark:bg
zinc-700 text-sky-600 dark:text-sky-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="gap-2">
                {/* GitHub链接 */}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm rounded-lg 
bg-zinc-800 text-white hover:bg-zinc-700"
                  >
                    <GithubIcon className="mr-2" />
                    源码
                  </a>
                )}
                
                {/* 演示链接 */}
                {project.demoLink && (<a
                    href={project.demoLink}
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm rounded-lg 
bg-sky-500 text-white hover:bg-sky-600"
                  >
                    <ExternalLinkIcon className="mr-2" />
                    演示
                  </a>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
 }
 // GitHub图标组件
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 
9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343
3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 
1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338
2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446
1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 
2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 
1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 
1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 
17.522 2 12 2z"
      />
    </svg>
  );
 }
 // 外部链接图标组件
function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 
       14"
        
        
        />
        </svg>
        );
}