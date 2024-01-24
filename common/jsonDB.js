import { JSONFilePreset } from 'lowdb/node';
import path from 'path';
import lodash from 'lodash'

const dbPath = path.resolve('db');

class LowDB {
    constructor(jsonName, defaultData) {
        this.db = this.initializeDB(jsonName, defaultData);
        this.table = this.initializeTable(defaultData);
    }

    async initializeDB(jsonName, defaultData) {
        return await JSONFilePreset(`${dbPath}/${jsonName}.json`, defaultData);
    }

    async initializeTable(defaultData) {
        return (await this.db).data[Object.keys(defaultData)[0]];
    }

    async findLowField(findField, findValue) {
        return (await this.table).find((item) => item[findField] === findValue);
    }

    async createField(item) {
        try {
            (await this.table).push(item);
            (await this.db).write();
            return true;
        } catch (error) {
            console.log('createField error :', error);
            return false;
        }
    }

    async updateField(item) {
        try {
            (await this.table).push(item);
            (await this.db).write();
            return true;
        } catch (error) {
            console.log('createField error :', error);
            return false;
        }
    }

    async deleteField(item) {
        try {
            (await this.table).push(item);
            (await this.db).write();
            return true;
        } catch (error) {
            console.log('createField error :', error);
            return false;
        }
    }
}


export { LowDB }