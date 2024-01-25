import { JSONFilePreset } from 'lowdb/node';
import path from 'path';
import _ from 'lodash';
import { binarySearch } from './binarySearch';

const dbPath = path.resolve('db');

class LowDB {
    constructor(jsonName, tableName) {
        this.db = this.initializeDB(jsonName, tableName);
        this.table = this.initializeTable(tableName);
    }

    async initializeDB(jsonName, tableName) {
        return await JSONFilePreset(`${dbPath}/${jsonName}.json`, { [tableName]: [] });
    }

    async initializeTable(tableName) {
        return (await this.db).data[tableName];
    }

    async findLowField(key, value) {
        return binarySearch((await this.table), key, value);
    }

    async createField(data) {
        try {
            (await this.table).push({ pk: _.uniqueId(), ...data });
            (await this.db).write();
            return true;
        } catch (error) {
            console.log('createField error :', error);
            return false;
        }
    }

    async updateField(targetKey, targetValue, newData) {
        try {
            const table = (await this.table);
            const field = binarySearch(table, targetKey, targetValue);
            table[field.index] = newData;
            (await this.db).write();
            return true;
        } catch (error) {
            console.log('createField error :', error);
            return false;
        }
    }

    async deleteField(targetKey, targetValue) {
        try {
            const table = (await this.table);
            const field = binarySearch(table, targetKey, targetValue);
            table.splice(field.index, 1);
            (await this.db).write();
            return true;
        } catch (error) {
            console.log('createField error :', error);
            return false;
        }
    }
}

export { LowDB }