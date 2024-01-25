import { JSONFilePreset } from 'lowdb/node';
import path from 'path';
import _ from 'lodash';

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
        return (await this.table).find((field) => field[key] === value);
    }

    async createField(data) {
        try {
            (await this.table).push({ id: _.uniqueId(), ...data });
            (await this.db).write();
            return true;
        } catch (error) {
            console.log('createField error :', error);
            return false;
        }
    }

    async updateField(item) {
        try {
    
            return true;
        } catch (error) {
            console.log('createField error :', error);
            return false;
        }
    }

    async deleteField(item) {
        try {
       
            return true;
        } catch (error) {
            console.log('createField error :', error);
            return false;
        }
    }
}

function objectArrayBinarySearch(array, targetKey, targetValue) {

    const sortArray = _.orderBy(array, [targetKey], ['asc']);

    const index = _.sortedIndexBy(sortArray, { [targetKey]: targetValue }, targetKey);
    
    if (sortArray[index] && sortArray[index][targetKey] === targetValue) {
      return sortArray[index];
    }
  
    return null;
  }

export { LowDB }