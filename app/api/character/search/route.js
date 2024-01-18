import { NextResponse } from 'next/server';
import { getDB2 } from '@/common/jsonDB';

export async function POST(req) {
  const request = await req.json();
  // characters 배열을 초기화
  const db = await getDB2('characters');
  console.log("ddddd11111111", request);
  //await db.update(({ characters }) => characters.push());
  // db.data.characters.push('hello world')
  // await db.write();
  console.log("db:", db.data);

  // let existingData = [];
  // try {
  //   existingData = await readJson(filePath);
  // } catch (error) {
  //   // 파일이 존재하지 않을 경우 무시하거나 적절한 오류 처리를 수행할 수 있습니다.
  //   console.error('Error reading existing data:', error);
  // }
  // // 새로운 데이터 추가
  // existingData.push(request);

  // // 합쳐진 데이터 저장
  // await writeJson(filePath, existingData);

  // // 저장 후 데이터 다시 읽어오기 (옵션)
  // const updatedData = await readJson(filePath);

  return NextResponse.json({
    message: 'Data written successfully',
    //updatedData: updatedData // 저장 후의 데이터를 확인하려면 필요합니다 (실제 프로덕션 코드에서는 필요 없을 수 있음).
  });
}
