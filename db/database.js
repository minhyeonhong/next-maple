import Database from 'better-sqlite3';
import path from 'path';

class DatabaseConnection {
    constructor() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = this;
            const dbPath = path.join(process.cwd(), 'db', 'sqlite', 'maple.sqlite');
            this.db = new Database(dbPath, { verbose: console.log });
            this.db.pragma('journal_mode = WAL');
            this.initDb();
        }
        return DatabaseConnection.instance;
    }

    initDb() {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS characters (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                today TEXT,
                character_name TEXT,
                ocid TEXT,
                world_name TEXT,
                character_gender TEXT,
                character_class TEXT,
                character_class_level TEXT,
                character_level TEXT,
                character_exp TEXT,
                character_exp_rate TEXT,
                character_guild_name TEXT,
                character_image TEXT,
                final_stat TEXT
            );
        `);
    }

    getDb() {
        return this.db;
    }
}

const instance = new DatabaseConnection();
Object.freeze(instance);

export default instance;  // Adjust to mimic default export

