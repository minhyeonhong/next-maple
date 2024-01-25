import { NextResponse } from 'next/server';
import { LowDB } from '@/common/LowDB';
import { api_maple_character_info } from '@/services/CharacterService';
import { today, isToday } from '@/common/date';
import _ from 'lodash'

export async function POST(req) {

  const request = await req.json();
  const lowdb = new LowDB('characters', 'characters');

  //await lowdb.updateField('ocid',1234,{ today: '2024-01-23', character_name: '푸하아앙잉', ocid: 321 });
  const r = await lowdb.allField();
  console.log(r);
  console.log('================');
  const sort = _.orderBy(r,['character_name'],['asc']);


  console.log(sort);


  // if (table.length > 0) {
  //   const dbCharacter = await lowdb.findLowField('character_name', '이상한');

  //   if (dbCharacter) {
  //      //db의 데이터가 오늘날짜가 아니면
  //   if (!isToday(dbCharacter.today)) {
  //     //메이플 api타고 캐릭정보 가져오기
  //     const character = await api_maple_character_info(request.character_name);
  //     //여기서 부터 짜야해!
  //     }
  //   } else {
  //     //메이플 api타고 캐릭정보 가져오기
  //     const character = await api_maple_character_info(request.character_name);
  //     const newCharacter = await lowdb.createField(character);

  //     if (!newCharacter) {
  //       return NextResponse.json({
  //         success: false,
  //         message: '캐릭터 가져오기 실패',
  //       },
  //         {
  //           status: 400,
  //         });
  //     }

  //     resultCharacter = character;
  //   }



  //   console.log('db에서 불러온 캐릭터 정보', dbCharacter);

  // } else {
  //   console.log("여긴 왔지? ");

  //   //메이플 api타고 캐릭정보 가져오기
  //   const character = await api_maple_character_info(request.character_name);

  //   const result = await lowdb.createField('characters', {
  //     today,
  //     character_name: request.character_name,
  //     ocid: 123,
  //   });

  //   console.log("result :", result);
  // }

  return NextResponse.json({
    success: true,
    message: '캐릭터 가져오기 성공',
    //character : resultCharacter,
  });
}

