import { readJson, writeJson } from '@/common/jsonHandler';
import { NextResponse } from 'next/server';
import { JSONFilePreset } from 'lowdb/node'


export async function POST(req) {
  // const request = await req.json();  

  // console.log('request', request);
  // await writeJson('/db/character.json',request);
  // const db = await readJson('/db/character.json');
  // console.log('db',db);
  // Read or create db.json
  const defaultData = { test: [] }
  const db = await JSONFilePreset('/db/jsons/character.json', defaultData)
  db.data.test.push('tttttt');
  await db.write();
  console.log("t", db.data);


  return NextResponse.json({ message: 'Data written successfully' }); // 성공 메시지 응답으로 전송
}

