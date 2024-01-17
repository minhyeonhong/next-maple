import { NextResponse } from 'next/server';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import path from 'path';

// db 디렉토리 안에 character.json 파일을 지정한 경로에 저장
const dbPath = path.resolve('db');

// 지정된 구성으로 JsonDB 인스턴스를 만듭니다
const db = new JsonDB(new Config(`${dbPath}/character`, true, false, '/'));

// // // 예시 데이터
// // const characterData = { today: "2024-01-17", test: "test" };

// // // 데이터 저장
// // db.push('/characters[]', characterData);

// // // 요청으로 받은 데이터
// // const requestData = { today: "2024-01-17", test: "test" };

// // // 데이터베이스에서 데이터 조회
// // const databaseData = db.getData('/characters');

// // // requestData와 동등한 데이터가 데이터베이스에 있는지 확인
// // const isDataExist = databaseData.some(data => JSON.stringify(data) === JSON.stringify(requestData));

const getStaticProps = async () => {
    // 예시 데이터를 JSON DB에서 가져오기
    const newData = { name: 'John Doe', level: 10 };

    // 데이터 추가
    db.push('/character', newData);
    const data = db.getData('/character');

    return data;
};

export async function POST(req) {
    const request = await req.json();

    const ddd = await getStaticProps();
    return NextResponse.json({
        message: 'Data written successfully',
        data: ddd // 저장 후의 데이터를 확인하려면 필요합니다 (실제 프로덕션 코드에서는 필요 없을 수 있음).
    });
}