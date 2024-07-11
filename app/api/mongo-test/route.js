import { NextResponse } from 'next/server';
import dbConnect from '@/db/mongodb';
import User from '@/db/mongo-models/User';

export async function GET() {
  await dbConnect();
  
  try {
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(req) {
  await dbConnect();
  
  try {
    const body = await req.json();
    const user = await User.create(body);
    return NextResponse.json({ success: true, data: user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
