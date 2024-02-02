'use client'
import React, { useEffect, useState } from "react";
import { maple } from "@/axios/maple";
import { today, todayPluse } from '../../common/date';
import axios from "axios";
import { app } from '@/axios/app';
import { api_maple_character_info } from "@/services/CharacterService";
import SearchSVG from "@/public/assets/character/search.svg";

const Character = () => {

  const [character, setCharactor] = useState({
  });

  const searchCharacter = async () => {
    // name이 "character_name"인 input 요소 선택
    const character_name = document.querySelector('input[name="character_name"]').value;

    if (!character_name) {
      alert('캐릭터명을 입력해 주세요.');
    }

    const result = await app.post('/api/character/search', { character_name });
    console.log('res', result);
    //const result = await axios.post('/api/character/search', {character_name});

  }


  useEffect(() => {
    console.log(character);
  }, [character])

  return (
    <div className="h-full grid grid-rows-4">
      <div className="row-span-1 flex flex-col justify-center items-center bg-red-100 ">
        로고
      </div>
      <div className="row-span-1 flex flex-col items-center">
        <input type='text' name='character_name' />

        <div className="w-80 relative mt-2 rounded-xl shadow-sm ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchSVG color="#4d4d4d" />
          </div>
          <input type="text" name='character_name'
            className="input-autofill w-full pl-10 pr-2 rounded-xl py-4 font-bold text-lg leading-[18px]  "
            placeholder="캐릭터 닉네임을 입력해 주세요." />
        </div>

        <button onClick={searchCharacter}>캐릭터 정보 가져오기</button><br />
      </div>
      <div className="row-span-2 flex flex-col items-center bg-green-100">
        캐릭 정보
      </div>
    </div>
  );
};

export default Character;