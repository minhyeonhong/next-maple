import { NextResponse } from 'next/server';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import { get_character_info } from '@/services/CharacterService';
import { today } from '@/common/date';
import path from 'path';



export async function POST(req) {
    // db 디렉토리 안에 character.json 파일을 지정한 경로에 저장
    const dbPath = path.resolve('db');

    // 지정된 구성으로 JsonDB 인스턴스를 만듭니다
    const db = new JsonDB(new Config(`${dbPath}/characters`, true, false, '/'));

    //json에 캐릭터 정보 가져오기
    const characters = await db.getData('/characters');

    const request = await req.json();

    // character_name 확인
    const characterIdx = characters.findIndex(item => item.character_name === request.character_name);
    // db데이터에 캐릭터가 있고 
    if (characterIdx !== -1 ) {
        //오늘 날짜면
        if(characters[characterIdx].today === today){
            return NextResponse.json({
                message: '정보 가져오기 성공',
                data: characters[characterIdx] 
            });
        }else {
            //오늘 날짜가 아니면
            //캐릭터 정보 api로 받아오고 db에 저장후 return
            const character = await get_character_info(request.character_name);
            characters[characterIdx] = character;
            db.push('/characters', characters);
            return NextResponse.json({
                message: '정보 가져오기 성공',
                data: character
            });
        }
    } else {
        // db데이터에 캐릭터가 없으면 
        //캐릭터 정보 api로 받아오고 db에 저장후 return
        const character = await get_character_info(request.character_name);
        db.push('/characters[]', character);

        return NextResponse.json({
            message: '정보 가져오기 성공',
            data: character
        });
    }
}
