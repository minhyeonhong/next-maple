'use client'
import React, { useEffect, useState } from "react";
import { maple } from "@/axios/maple";
import { today, todayPluse } from '../../common/date';
import axios from "axios";
import { app } from '@/axios/app';
import { api_maple_character_info } from "@/services/CharacterService";

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
    <div className="h-[100%] grid grid-rows-4">
      <div className="row-span-1 flex flex-col justify-center items-center bg-red-100 ">
        로고
      </div>
      <div className="row-span-1 flex flex-col items-center bg-blue-100">
        <input type='text' name='character_name' />

        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm">$</span>
          </div>
          <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <div>dd</div>
          </div>
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