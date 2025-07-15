// 确保此指令位于文件的最顶部
"use server";
import { db } from "@/db"; // Drizzle db 实例
import { prompts } from "@/db/schema/prompts-schema"; // Prompts 表的模式
import { devDelay } from "@/lib/dev-delay"; // 开发延迟辅助函数
import { desc, eq } from "drizzle-orm"; // Drizzle 操作符
/**
* 读取：获取所有提示，按创建日期降序排列。
*/
export async function getPrompts() {
try {
await devDelay(); // 在开发中模拟延迟
console.log("服务器操作：正在获取提示...");
const allPrompts = await
db.select().from(prompts).orderBy(desc(prompts.created_at));
console.log(`服务器操作：已获取 ${allPrompts.length} 条提示。`);
return allPrompts;
} catch (error) {
console.error("服务器操作错误 (getPrompts):", error);
throw new Error("获取提示失败。"); // 重新抛出一个通用错误
}
}
/**
* 创建：创建一个新提示。
*/
export async function createPrompt({ name, description, content }: { name: string;
    description: string; content: string }) {
    try {
    await devDelay();
    console.log("服务器操作：正在创建提示...");
    // 插入新提示并返回插入的记录
    const [newPrompt] = await db.insert(prompts).values({ name, description, content
    }).returning();
    console.log("服务器操作：提示已创建:", newPrompt);
    return newPrompt;
    } catch (error) {
    console.error("服务器操作错误 (createPrompt):", error);
    throw new Error("创建提示失败。");
    }
    }
    /**
    * 更新：根据 ID 更新一个现有的提示。
    */
    export async function updatePrompt({ id, name, description, content }: { id: number;
    name: string; description: string; content: string }) {
    try {
    await devDelay();
    console.log(`服务器操作：正在更新提示 ${id}...`);
    // 更新匹配 ID 的提示并返回更新后的记录
    const [updatedPrompt] = await db
    .update(prompts)
    .set({ name, description, content, updated_at: new Date() }) // 同时更新updated_at
    .where(eq(prompts.id, id)) // 使用 eq() 进行相等性检查
    .returning();
    if (!updatedPrompt) {
    throw new Error("未找到要更新的提示。");
    }
    console.log("服务器操作：提示已更新:", updatedPrompt);
    return updatedPrompt;
    } catch (error) {
    console.error("服务器操作错误 (updatePrompt):", error);
    // 重新抛出特定错误或一个通用错误
    if (error instanceof Error && error.message.includes("Prompt not found")) {
    throw error;
    }
    throw new Error("更新提示失败。");
    }
    }
/**
* 删除：根据 ID 删除一个提示。
*/
export async function deletePrompt(id: number) {
    try {
    await devDelay();
    console.log(`服务器操作：正在删除提示 ${id}...`);
    // 删除匹配 ID 的提示并返回被删除的记录
    const [deletedPrompt] = await db.delete(prompts).where(eq(prompts.id,
    id)).returning();
    if (!deletedPrompt) {
    throw new Error("未找到要删除的提示。");
    }
    console.log("服务器操作：提示已删除:", deletedPrompt);
    return deletedPrompt;
    } catch (error) {
    console.error("服务器操作错误 (deletePrompt):", error);
    if (error instanceof Error && error.message.includes("Prompt not found")) {
    throw error;
    }
    throw new Error("删除提示失败。");
    }
    }
    