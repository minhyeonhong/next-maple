import { NextResponse } from 'next/server';
import { LowDB } from '@/common/LowDB';
import { api_maple_rankings, fetchAllRankingPages } from '@/services/RankingService';
import { isToday } from '@/common/date';

export async function POST(req) {
    const request = await req.json();

    // const rankings = await api_maple_rankings(request);

    // if(rankings.status !== 200) {
    //     fail();
    // }

    const test = await fetchAllRankingPages();

    return NextResponse.json({
        success: true,
        message: '랭킹 가져오기 성공',
        //rankings: rankings.data,
    });
}

const fail = () => {
    return NextResponse.json({
        success: false,
        message: '랭킹 가져오기 실패',
    },
        {
            status: 400,
        });
}

