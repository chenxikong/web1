// 从 Drizzle 的 PostgreSQL 核心库中导入必要的函数
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
/**
* 使用 Drizzle ORM 为 "prompts" 表定义的模式。
* 这个对象描述了将在我们 PostgreSQL 数据库中创建的 'prompts' 表的
* 结构和约束。
*/
export const prompts = pgTable("prompts", {
    /**
    * 'id' 列：
    * - 类型：serial (PostgreSQL 的自增整数)
    * - 约束：primaryKey() - 唯一标识表中的每一行。
    * - 隐式地包含 NOT NULL 和 UNIQUE 约束。
    */
    id: serial("id").primaryKey(),
    /**
    * 'name' 列：
    * - 类型：text (可变长度字符串)
    * - 约束：notNull() - 此列不能包含 NULL 值。
    */
    name: text("name").notNull(),
    /**
    * 'description' 列：
    * - 类型：text
    * - 约束：notNull()
    */
    description: text("description").notNull(),
    /**
    * 'content' 列：
    * - 类型：text
    * - 约束：notNull()
    */
    content: text("content").notNull(),
    /**
    * 'created_at' 列：
    * - 类型：timestamp (日期和时间)
    * - 约束：defaultNow() - 如果在插入新行时未提供值，
    * * 则将默认值设置为当前时间戳。
* - 约束：notNull()
*/
created_at: timestamp("created_at").defaultNow().notNull(),
/**
* 'updated_at' 列：
* - 类型：timestamp
* - 约束：defaultNow() - 在插入时设置初始值。
* - 约束：notNull()
* - 特殊的 Drizzle 辅助函数：.$onUpdate(() => new Date()) - 每当
* 使用 Drizzle 的 update 函数更新此行时，自动将此列的值
* 更新为当前时间戳。
*/
updated_at: timestamp("updated_at")
.defaultNow()
.notNull()
.$onUpdate(() => new Date()),
});
