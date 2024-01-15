import fs from 'fs';
import path from 'path';

// JSON 파일 읽기 함수
export async function readJson() {
  const dataPath = path.join(process.cwd(), '/db/character.json'); // data.json 파일 경로
  const fileData = await fs.promises.readFile(dataPath, 'utf8'); // 비동기적으로 파일 읽기
  const data = JSON.parse(fileData); // JSON 파싱
  return data;
}

// JSON 파일 쓰기 함수
export async function writeJson(newData) {
  const dataPath = path.join(process.cwd(), '/db/character.json'); // data.json 파일 경로
  await fs.promises.writeFile(dataPath, JSON.stringify(newData, null, 2)); // 비동기적으로 파일 쓰기
}
