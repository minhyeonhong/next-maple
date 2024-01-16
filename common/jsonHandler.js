import fs from 'fs/promises';
import path from 'path';

// JSON 파일 읽기 함수
export async function readJson(filePath) {
  try {
    const dataPath = path.join(process.cwd(), filePath);
    const fileData = await fs.readFile(dataPath, 'utf8');
    const data = JSON.parse(fileData);
    return data;
  } catch (error) {
    console.error(`Error reading JSON file: ${error.message}`);
    throw error;
  }
}

// JSON 파일 쓰기 함수
export async function writeJson(filePath, newData) {
  try {
    const dataPath = path.join(process.cwd(), filePath);
    await fs.writeFile(dataPath, JSON.stringify(newData, null, 2));
  } catch (error) {
    console.error(`Error writing JSON file: ${error.message}`);
    throw error;
  }
}
