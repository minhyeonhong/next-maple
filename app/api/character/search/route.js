import { NextRequest,NextResponse } from 'next/server';
import { LowDB } from '@/common/jsonDB';
import { get_character_info } from '@/services/CharacterService';
import { today } from '@/common/date';

export async function POST(req) {

  const request = await req.json();
  // characters 배열을 초기화
  const lowdb = new LowDB('characters', { characters: [] });
  //await lowdb.db.update(({ posts }) => posts.push('hello world'))

  const table = await lowdb.getTable('characters');
  console.log("table length", table);
  console.log("request.character_name", request.character_name);

  if (table.length > 0) {
    const getChracter = await lowdb.findLowField('character_name', request.character_name);
    console.log('getChracter', getChracter);

  } else {
    console.log("여긴 왔지? ");
    //const character = await get_character_info(request.character_name);

    const result = await lowdb.createField('characters', {
      today,
      character_name: request.character_name,
      ocid: 123,
    });

    console.log("result :", result);
  }

  return NextResponse.json({
    message: 'Data written successfully',
    //updatedData: updatedData // 저장 후의 데이터를 확인하려면 필요합니다 (실제 프로덕션 코드에서는 필요 없을 수 있음).
  });
}

