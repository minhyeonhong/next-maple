import { JSONFilePreset, JSONFile } from 'lowdb/node';
import { Low } from 'lowdb';
import path from 'path';
import lodash from 'lodash'

const dbPath = path.resolve('db');

class LowWithLodash extends Low {
    constructor(adapter) {
        super(adapter, { [Object.keys(adapter)[0]]: [] });
        this.chain = lodash.chain(this).get('data');
    }
}

class LowDB {
    constructor(jsonName, defaultData) {
        this.adapter = new JSONFile(`${dbPath}/${jsonName}.json`, defaultData);
        this.db = this.dbReady();
    }

    async dbReady() {
        const db = new LowWithLodash(this.adapter);
        console.log('aas', this.adapter);
        await db.read();
        return db;
    }

    // constructor(jsonName, defaultData) {
    //     this.db = this.initializeDB(jsonName, defaultData);
    //     this.table = this.initializeTable(defaultData);
    // }

    // async initializeDB(jsonName, defaultData) {
    //     return await JSONFilePreset(`${dbPath}/${jsonName}.json`, defaultData);
    // }

    // async initializeTable(defaultData) {
    //     return (await this.db).data[Object.keys(defaultData)[0]];
    // }

    // async findLowField(findField, findValue) {
    //     return (await this.table).find((item) => item[findField] === findValue);
    // }

    // async createField(item) {
    //     try {
    //         (await this.table).push(item);
    //         (await this.db).write();
    //         return true;
    //     } catch (error) {
    //         console.log('createField error :', error);
    //         return false;
    //     }
    // }

    // async updateField(item) {
    //     try {
    //         (await this.table).push(item);
    //         (await this.db).write();
    //         return true;
    //     } catch (error) {
    //         console.log('createField error :', error);
    //         return false;
    //     }
    // }

    // async deleteField(item) {
    //     try {
    //         (await this.table).push(item);
    //         (await this.db).write();
    //         return true;
    //     } catch (error) {
    //         console.log('createField error :', error);
    //         return false;
    //     }
    // }
}


export { LowDB }