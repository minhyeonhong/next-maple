import fs from 'fs';
import path from 'path';

export async function post(req, res) {
  const dataPath = path.join(process.cwd(), '/db/character.json'); // data.json 파일 경로

  console.log("req",req);
  const data = { message: 'Hello, World!' }; // 쓸 데이터

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2)); // 동기적으로 파일 쓰기

  return res.status(200).json({ message: 'Data written successfully' }); // 성공 메시지 응답으로 전송
}

