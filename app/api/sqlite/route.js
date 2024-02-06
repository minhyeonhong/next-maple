import dbInstance from '@/db/database'; // database.js에서 싱글톤 인스턴스를 불러옵니다.
import { NextResponse } from 'next/server';

export async function GET(req) {
    //const request = await req.json();
    const db = dbInstance.getDb();
    const items = db.prepare('SELECT * FROM characters').all();
    return NextResponse.json({
        success: true,
        message: '성공',
        items: items,
      });
}

// export default async function GET(req, res) {
//     const db = dbInstance.getDb();
//     const items = db.prepare('SELECT * FROM items').all();

//     return NextResponse.json({
//         success: true,
//         message: '성공',
//         items: items,
//       });
// }


// import sqlite3 from 'sqlite3';
// import { open } from 'sqlite';
// import { NextResponse } from 'next/server';

// // 데이터베이스 연결 설정
// const connectDB = async () => {
//     return open({
//         filename: './database.db', // 실제 데이터베이스 파일 경로
//         driver: sqlite3.Database,
//     });
// };

// export async function GET(req, res) {
//     const request = await req.json();

//     try {
//         const db = await connectDB();
//         const users = await db.all('SELECT * FROM users');
//         console.log('=================');
//         console.log(users);
//         console.log('=================');
//         //res.status(200).json(users);
//         // return NextResponse.json({
//         //     success: true,
//         //     message: 'sqlite success',
//         //     users: res.status(200).json(users),
//         // });
//     } catch (error) {
//         console.error('Database error:', error);
//         //res.status(500).json({ error: 'Internal Server Error' });
//     }


// }

// export default async function handler(req, res) {
//     const { method, body } = req;

//     // CRUD 작업 수행
//     switch (method) {
//         case 'GET':
//             try {
//                 const db = await connectDB();
//                 const users = await db.all('SELECT * FROM users');
//                 res.status(200).json(users);
//             } catch (error) {
//                 console.error('Database error:', error);
//                 res.status(500).json({ error: 'Internal Server Error' });
//             }
//             break;

//         case 'POST':
//             try {
//                 const { name, email } = body;
//                 const db = await connectDB();
//                 const result = await db.run(
//                     'INSERT INTO users (name, email) VALUES (?, ?)',
//                     [name, email]
//                 );
//                 res.status(201).json({ id: result.lastID, name, email });
//             } catch (error) {
//                 console.error('Database error:', error);
//                 res.status(500).json({ error: 'Internal Server Error' });
//             }
//             break;

//         case 'PUT':
//             try {
//                 const { id, name, email } = body;
//                 const db = await connectDB();
//                 await db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [
//                     name,
//                     email,
//                     id,
//                 ]);
//                 res.status(200).json({ id, name, email });
//             } catch (error) {
//                 console.error('Database error:', error);
//                 res.status(500).json({ error: 'Internal Server Error' });
//             }
//             break;

//         case 'DELETE':
//             try {
//                 const { id } = body;
//                 const db = await connectDB();
//                 await db.run('DELETE FROM users WHERE id = ?', [id]);
//                 res.status(200).json({ id });
//             } catch (error) {
//                 console.error('Database error:', error);
//                 res.status(500).json({ error: 'Internal Server Error' });
//             }
//             break;

//         default:
//             res.status(405).end(); // Method Not Allowed
//     }
// }

