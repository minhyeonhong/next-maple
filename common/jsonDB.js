import { JSONFilePreset, JSONFile } from 'lowdb/node';
import path from 'path';
import { Low } from 'lowdb'
import lodash from 'lodash'

const dbPath = path.resolve('db');

const getDB = async (table) => {
    return await JSONFilePreset(`${dbPath}/${table}.json`, { [table]: [] });
}

class LowWithLodash extends Low {
    constructor(adapter) {
        super(adapter);
        this.chain = lodash.chain(this).get('data');
    }
}

const getDB2 = async (table) => {
    const adapter = new JSONFile(`${dbPath}/${table}.json`, { [table]: [] });
    const test = await JSONFilePreset(`${dbPath}/${table}.json`, { [table]: [] });
    console.log("-------", test);
    return new LowWithLodash(test);
}

export { getDB, getDB2 }