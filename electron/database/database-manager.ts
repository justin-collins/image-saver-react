import BetterSqlite3MultipleCiphers, { RunResult } from "better-sqlite3-multiple-ciphers";
import fs from "fs";

const BASE_PATH = "./electron/database";
const dbPath = `${BASE_PATH}/database.db`;
const schemaFile = "database.schema.sql";
let db: BetterSqlite3MultipleCiphers.Database;

const initialize = () => {
	db = new BetterSqlite3MultipleCiphers(dbPath);
	db.pragma("journal_mode = WAL");
	db.pragma("foreign_keys = true");
	runFile(schemaFile);
};

const destroy = () => {
	db.close();
};

const runFile = (fileName: string) => {
	const filePath = `${BASE_PATH}/scripts/${fileName}`;
	const sql = fs.readFileSync(filePath, { encoding: 'utf8' });
	return db.exec(sql);
};

const quickStart = () => {
	runFile("quickstart.sql");
};

const selectAll = (sql: string): unknown[] => {
	return db.prepare(sql).all();
};

const insert = (sql: string): RunResult => {
	return db.prepare(sql).run();
};

const update = (sql: string): RunResult => {
	return db.prepare(sql).run();
};

const dbDelete = (sql: string): RunResult => {
	return db.prepare(sql).run();
};

export const DatabaseManager = {
	initialize,
	destroy,
	runFile,
	quickStart,
	selectAll,
	insert,
	update,
	dbDelete
};
