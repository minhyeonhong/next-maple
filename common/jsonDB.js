import { JSONFilePreset } from 'lowdb/node';
import path from 'path';
import lodash from 'lodash'

const dbPath = path.resolve('db');

class LowDB {
    constructor(jsonName, defaultData) {
        this.db = this.initializeDB(jsonName, defaultData);
    }

    async initializeDB(jsonName, defaultData) {
        return await JSONFilePreset(`${dbPath}/${jsonName}.json`, defaultData);
    }

    async getTable(table) {
        return (await this.db).data[table];
    }

    async findLowField(findField, findValue) {
        const table = await getTable();
        return table.find((field) => field[findField] === findValue);
    }
}


export { LowDB }