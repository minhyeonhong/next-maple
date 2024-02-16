import { maple } from "@/axios/maple";
import { today, todayPluse } from '../common/date';

//월드 명
const world_names = [
    '스카니아',
    '베라',
    '루나',
    '제니스',
    '크로아',
    '유니온',
    '엘리시움',
    '이노시스',
    '레드',
    '오로라',
    '아케인',
    '노바',
    '리부트',
    '리부트2',
    '버닝',
    '버닝2',
    '버닝3'
];

//직업 및 전직
const classes = [
    '초보자-전체 전직',
    '전사-전체 전직',
    '전사-검사',
    '전사-파이터',
    '전사-페이지',
    '전사-스피어맨',
    '전사-크루세이더',
    '전사-나이트',
    '전사-버서커',
    '전사-히어로',
    '전사-팔라딘',
    '전사-다크나이트',
    '마법사-전체 전직',
    '마법사-매지션',
    '마법사-위자드(불,독)',
    '마법사-위자드(썬,콜)',
    '마법사-클레릭',
    '마법사-메이지(불,독)',
    '마법사-메이지(썬,콜)',
    '마법사-프리스트',
    '마법사-아크메이지(불,독)',
    '마법사-아크메이지(썬,콜)',
    '마법사-비숍',
    '궁수-전체 전직',
    '궁수-아처',
    '궁수-헌터',
    '궁수-사수',
    '궁수-레인저',
    '궁수-저격수',
    '궁수-보우마스터',
    '궁수-신궁',
    '궁수-아처(패스파인더)',
    '궁수-에인션트아처',
    '궁수-체이서',
    '궁수-패스파인더',
    '도적-전체 전직',
    '도적-로그',
    '도적-어쌔신',
    '도적-시프',
    '도적-허밋',
    '도적-시프마스터',
    '도적-나이트로드',
    '도적-섀도어',
    '도적-세미듀어러',
    '도적-듀어러',
    '도적-듀얼마스터',
    '도적-슬래셔',
    '도적-듀얼블레이더',
    '해적-전체 전직',
    '해적-해적',
    '해적-인파이터',
    '해적-건슬링거',
    '해적-캐논슈터',
    '해적-버커니어',
    '해적-발키리',
    '해적-캐논블래스터',
    '해적-바이퍼',
    '해적-캡틴',
    '해적-캐논마스터',
    '기사단-전체 전직',
    '기사단-노블레스',
    '기사단-소울마스터',
    '기사단-플레임위자드',
    '기사단-윈드브레이커',
    '기사단-나이트워커',
    '기사단-스트라이커',
    '기사단-미하일',
    '아란-전체 전직',
    '에반-전체 전직',
    '레지스탕스-전체 전직',
    '레지스탕스-시티즌',
    '레지스탕스-배틀메이지',
    '레지스탕스-와일드헌터',
    '레지스탕스-메카닉',
    '레지스탕스-데몬슬레이어',
    '레지스탕스-데몬어벤져',
    '레지스탕스-제논',
    '레지스탕스-블래스터',
    '메르세데스-전체 전직',
    '팬텀-전체 전직',
    '루미너스-전체 전직',
    '카이저-전체 전직',
    '엔젤릭버스터-전체 전직',
    '초월자-전체 전직',
    '초월자-제로',
    '은월-전체 전직',
    '프렌즈 월드-전체 전직',
    '프렌즈 월드-키네시스',
    '카데나-전체 전직',
    '일리움-전체 전직',
    '아크-전체 전직',
    '호영-전체 전직',
    '아델-전체 전직',
    '카인-전체 전직',
    '라라-전체 전직',
    '칼리-전체 전직'
];

const totalPages = 2980; // 원하는 페이지 수
const perPage = 500;

const apiRequestBundle = (total, bundleValue) => {
    const bundles = [];
    for (let i = 0; i < total; i += bundleValue) {
        bundles.push(i + bundleValue > total ? total : i + bundleValue);
    }
    return bundles;
}

const fetchAllRankingPages = async () => {
    try {
        const apiBundles = apiRequestBundle(totalPages, perPage);
        console.log("apiBundles");
        console.log(apiBundles);

        const pageNumbers = apiBundles.map((subArray, index) => {
            const start = index * perPage + 1;
            const end = subArray;
            return Array.from({length: end - start + 1}, (_, index) => start + index);
        });
        console.log("pageNumbers");
        console.log(pageNumbers);

        //=========================================================
        //타이머 초당 500건씩 api호출하기 위해
        let index = 0;
        // let intervalId = setInterval(async () => {
        //     console.log(index);
        //     const promises = pageNumbers.map(page => fetchRankingPage(page));
        //     const results = await Promise.all(promises);
            
        //     index++;
        //     console.log(pageNumbers);
        // }, 1000);

        // setTimeout(function () {
        //     clearInterval(intervalId);
        //     console.log("setInterval 중지");
        // }, (1000 * (apiBundles.length))); // 10000밀리초(10초) 후에 중지


        // const rankTotal = results.length;

        let intervalId = setInterval(async () => {
            console.log("index");
            console.log(index);
            // const promises = pageNumbers[index].map(page => fetchRankingPage(page));
            // const pageResults = await Promise.all(promises);
            // results = results.concat(pageResults);
            
            index++;
            if (index >= pageNumbers.length) {
                clearInterval(intervalId);
                console.log("setInterval 중지");
                // console.log("전체 순위 결과:", results);
                // console.log("총 순위 수:", results.length);
            }
        }, 1000);
        //같은 소스 비교 확인하고 수정 해야함
        //=========================================================
        

        // console.log("몫:", quotient); // 출력: 5
        // console.log("나머지:", remainder); // 출력: 480
        // console.log("dd:", dd); // 출력: 480
        // const promises = pageNumbers.map(page => fetchRankingPage(page));
        // const results = await Promise.all(promises);
        // const totalPages = results.length;
        // const perPage = 500;

        // //const test = Array.from({ length: totalPages }, (_, index) => results[index]);
        // const combinedArray = results.reduce((acc, current) => {
        //     acc.ranking.push(...current.ranking);
        //     return acc;
        // }, { ranking: [] });

        // const quotient = Math.floor(totalPages / perPage);
        // const remainder = totalPages % perPage;

        // const paging = Array.from({ length: quotient }, (_, index) => (index + 1) * perPage);
        // if (remainder !== 0) {
        //     paging.push(
        //         paging.length === 0 ? remainder :
        //         paging[paging.length - 1] + remainder
        //     );
        // }

        // console.log('All ranking pages:', results);
        // console.log('totalPages:', combinedArray);
    } catch (error) {
        console.error('Error fetching ranking pages:', error);
    }
};

const fetchRankingPage = async (page) => {

    const response = await instance.get(`${process.env.REACT_APP_MAPLE_BASE_URL}/maplestory/v1/ranking/overall?date=${today}&page=${page}`, {
        headers: {
            "x-nxopen-api-key": process.env.REACT_APP_MAPLE_KEY
        },
    });

    const ranking = response.data.ranking;
    return { ranking };
}

const api_maple_rankings = async (param) => {
    const params = new URLSearchParams({
        date: today
    });
    // world_name 파라미터 추가
    if (world_names.includes(param.world_name)) {
        params.set('world_name', param.world_name);
        const worldType = ['리부트', '리부트2'].includes(param.world_name) ? '1' : '0';
        params.set('world_type', worldType);
    }
    // class 파라미터 추가
    if (classes.includes(param.class)) {
        params.set('class', param.class);
    }
    // ocid 파라미터 추가
    if (param.ocid) {
        params.set('ocid', param.ocid);
    }
    // page 파라미터 추가
    if (param.page) {
        params.set('page', param.page);
    }

    return await maple.get(`/maplestory/v1/ranking/overall?${params.toString()}`, {
        headers: {
            "x-nxopen-api-key": process.env.NEXT_PUBLIC_MAPLE_KEY
        },
    });
}

export { world_names, classes, api_maple_rankings, fetchAllRankingPages }