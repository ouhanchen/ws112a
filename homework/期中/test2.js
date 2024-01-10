import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("dr_information.db");  // 初始化資料庫

const userIdToDelete = 3;

// 使用 SQL DELETE 陳述句刪除資料
const deleteQuery = `DELETE FROM users WHERE id = 3`;

// 執行刪除操作
await db.query(deleteQuery, [userIdToDelete]);