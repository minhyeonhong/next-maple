import { NextResponse } from 'next/server';
import { LowDB } from '@/common/LowDB';
import { api_maple_character_info } from '@/services/CharacterService';
import { isToday } from '@/common/date';

export async function POST(req) {
  const request = await req.json();
  const lowdb = new LowDB('characters', 'characters');
  let dbCharacter = null;

  // db에 캐릭정보 가져오기
  dbCharacter = await lowdb.findLowField('character_name', request.character_name);

  // 데이터가 없거나 오늘날짜가 아닌 경우 새로운 데이터를 가져옴
  if (!dbCharacter || !isToday(dbCharacter.data.today)) {
    const freshData = await api_maple_character_info(request.character_name);
    const isUpdatedOrCreated = dbCharacter 
      ? await lowdb.updateField('character_name', request.character_name, freshData)
      : await lowdb.createField(freshData);

    if(isUpdatedOrCreated){
      dbCharacter = freshData;
    } else {
      return fail();
    }
  }

  return NextResponse.json({
    success: true,
    message: '캐릭터 가져오기 성공',
    character: dbCharacter,
  });
}

const fail = () => {
  return NextResponse.json({
    success: false,
    message: '캐릭터 가져오기 실패',
  },
    {
      status: 400,
    });
}

