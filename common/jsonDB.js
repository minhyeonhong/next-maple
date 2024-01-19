import { JSONFilePreset } from 'lowdb/node';
import path from 'path';
import lodash from 'lodash'

const dbPath = path.resolve('db');

const getDB = async (table) => {
    return await JSONFilePreset(`${dbPath}/${table}.json`, { [table]: [] });
}

class LowDB {
    constructor(dbName) {
        this.dbName = dbName;
        this.db = this.initializeDB();
    }

    async initializeDB() {
        const defaultValue = { [this.dbName]: [] };
        const db = await JSONFilePreset(`${dbPath}/${this.dbName}.json`, defaultValue);
        return db;
    }

    async initializeTable() {
        return this.db.data[this.dbName];
    }

    async findLowField(findField, findValue) {
        const table = await getTable();
        return table.find((field) => field[findField] === findValue);
    }
}


export { getDB, LowDB }