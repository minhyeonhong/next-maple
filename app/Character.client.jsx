'use client'
import React, { useEffect, useState } from "react";
import { maple } from "@/axios/maple";
import { today, todayPluse } from '../common/date';
import axios from "axios";

const Character = () => {
  const [search, setSearch] = useState({
    character_name: "",
  });
  const [character, setCharactor] = useState({
  });

  const endpoints = [
    'basic', //기본 
    'popularity', //인기도 
    'stat', //종합 능력치
    'hyper-stat', //하이퍼스탯
    'propensity', //성향
    'ability',  //어빌리티
    'item-equipment', //장착 장비
    'cashitem-equipment', //장착 캐시 장비
    'symbol-equipment', //장착 심볼
    'set-effect',   //적용 세트 효과
    'beauty-equipment', //장착 헤어,성형,피부
    'android-equipment', //장착 안드로이드
    'pet-equipment', //장착 펫
    'skill', //스킬 --
    'link-skill', //장착 링크 스킬
    'vmatrix', //V매트릭스
    'hexamatrix', //HEXA코어 
    'hexamatrix-stat', //HEXA매트릭스 설정 HEXA스탯
    'dojang', //무릉 최고 기록
  ];

  // 조회하고자 하는 전직 차수
  // 0: 0차 스킬 및 제로 공용스킬
  // 1: 1차 스킬
  // 1.5: 1.5차 스킬
  // 2: 2차 스킬
  // 2.5: 2.5차 스킬
  // 3: 3차 스킬
  // 4: 4차 스킬 및 제로 알파/베타 스킬
  // hyperpassive: 하이퍼 패시브 스킬
  // hyperactive: 하이퍼 액티브 스킬
  // 5: 5차 스킬
  // 6: 6차 스킬
  const skillOptions = [
    'hyperpassive',
    'hyperactive',
    '5',
    '6',
  ];
  const get_character_info = async () => {
    const two_days_ago = todayPluse(-2);
    //오늘 날짜를 불러오면 에러나서 2이전 날짜로

    const response = await maple.get(`${process.env.NEXT_PUBLIC_MAPLE_BASE_URL}/maplestory/v1/id?character_name=${search.character_name}`, {
      headers: {
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_MAPLE_KEY
      },
    });

    if (response.status !== 200) {
      alert('캐릭터 정보 없음');
      return;
    }

    const ocid = response.data.ocid;

    const promises = endpoints.map(endpoint => {
      if (endpoint === 'skill') {
        const skillPromises = skillOptions.map(skillOption =>
          maple.get(`${process.env.NEXT_PUBLIC_MAPLE_BASE_URL}/maplestory/v1/character/${endpoint}?ocid=${ocid}&date=${two_days_ago}&character_skill_grade=${skillOption}`, {
            headers: {
              "x-nxopen-api-key": process.env.NEXT_PUBLIC_MAPLE_KEY
            },
          })
        );
        return Promise.all(skillPromises);
      } else {
        return maple.get(`${process.env.NEXT_PUBLIC_MAPLE_BASE_URL}/maplestory/v1/character/${endpoint}?ocid=${ocid}&date=${two_days_ago}`, {
          headers: {
            "x-nxopen-api-key": process.env.NEXT_PUBLIC_MAPLE_KEY
          },
        });
      }
    });

    const results = await Promise.all(promises);

    const resultObjects = results.map((result, index) => {
      const key = endpoints[index];
      const value = (key === 'skill')
        ? skillOptions.reduce((acc, skillOption, i) => ({ ...acc, [skillOption]: result[i].data }), {})
        : result.data;

      return { [key]: value };
    });

    const combinedObject = Object.assign({}, ...resultObjects);

    setCharactor(combinedObject);
  }

  const test = async () => {
    const result = await axios.post('/api/characters', { test: 'test' });
    console.log("result", result);
  }

  useEffect(() => {
    console.log(character);
  }, [character])

  return (
    <div>
      <input type='text' name='character_name' value={search.character_name || ""} onChange={(e) => setSearch({ ...search, [e.target.name]: e.target.value })} />
      <button onClick={get_character_info}>캐릭터 정보 가져오기</button><br />
      <button onClick={test}>test</button>
    </div>
  );
};

export default Character;