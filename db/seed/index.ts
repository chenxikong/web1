import { db } from "@/db"; // 如果你的 db/index.ts 在别处，请调整导入路径
import { prompts } from "../schema/prompts-schema"; // 导入 Drizzle 模式定义
/**
* 一个包含要插入数据库的示例提示对象的数组。
* 注意：我们没有指定 'id'、'created_at' 或 'updated_at'，因为
* 它们由数据库/Drizzle 模式的默认设置自动处理。
*/
const seedPrompts = [
{
name: "Code Explainer",
description: "Explains code in simple terms",
content: "Please explain this code in simple terms, as if you'reteaching a beginner programmer:",
},
{
name: "Bug Finder",
description: "Helps identify bugs in code",
content: "Review this code and identify potential bugs, performanceissues, or security vulnerabilities:",
},
// ... [其余数据项保持英文，因为它们是代码的一部分]
// ...
{
name: "Git Command Helper",
description: "Helps with Git commands",
content: "What Git commands should I use to accomplish the followingtask:",
}
];
/**
* 执行数据库填充操作的异步函数。
*/
async function seed() {
try {
console.log("🌱 开始进行数据库填充...");
// 可选：在插入新数据前删除所有现有的提示。
// 这使得脚本是幂等的（可以安全地多次运行）。
// 请谨慎使用，尤其是在开发环境之外！
console.log("🗑 正在从 'prompts' 表中清除现有数据...");
await db.delete(prompts);
// 将种子提示数组插入到 'prompts' 表中。
console.log("📥 正在向 'prompts' 表中插入种子数据...");
await db.insert(prompts).values(seedPrompts);
console.log("✅ 数据库填充成功完成！");
} catch (error) {
// 捕获并记录填充过程中的任何错误。
console.error("❌ 数据库填充过程中出错:", error);
// 可选地重新抛出错误以表示脚本失败
throw error;
} finally {
// 重要提示：脚本完成后，关闭数据库连接池。
// 独立运行的脚本需要显式地关闭连接。
console.log("🚪 正在关闭数据库连接...");
// 访问底层的客户端（语法可能取决于具体的驱动设置）
// 对于 `postgres` 库，通常是 .$client.end()
await db.$client.end();
console.log("🔌 数据库连接已关闭。");
}
}
// 当脚本运行时，立即调用 seed 函数。
seed();