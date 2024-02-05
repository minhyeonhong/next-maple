'use client'
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { app } from '@/axios/app';
import SearchSVG from "@/public/assets/character/search.svg";
import SearchCansleSVG from "@/public/assets/character/search_cansle.svg";
import InputSearch from "../common/InputSearch.client";

const Character = () => {

  const [characterName, setCharacterName] = useState('');

  const { data: character, isError, isLoading } = useQuery({
    queryKey: ['character', characterName],
    queryFn: async () => {
      const response = await app.post('/api/character/search', { character_name: characterName });
      return response.data.character.data;
    },
    enabled: false,  // characterName이 있을 때만 쿼리 실행
  });

  const searchCharacter = async () => {
    if (!characterName) {
      alert('캐릭터명을 입력해 주세요.');
      return;
    }

    await queryClient.prefetchQuery(['character', characterName]);
  }

  const sqliteTest = async () => {
    const res = await app.get('/api/sqlite');
    console.log(res);
  }

  useEffect(() => {
    console.log(character);
  }, [character])

  return (
    <div className="h-full grid grid-rows-6">
      <div className="row-span-1 flex flex-col justify-center items-center bg-red-100 ">
        로고
        <button onClick={sqliteTest}>sqlite test</button>
        <InputSearch input={characterName} setInput={setCharacterName} inputEnter={searchCharacter} />
      </div>
      <div className="row-span-2 flex flex-col items-center">

        <div className="w-80 relative mt-2 rounded-xl shadow-sm ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchSVG color="#4d4d4d" />
          </div>
          <input type="text" name='character_name' onKeyUp={(e) => { e.key === 'Enter' && searchCharacter() }}
            className="input-autofill w-full pl-10 pr-2 rounded-xl py-4 font-bold text-lg leading-[18px]  "
            placeholder="캐릭터 닉네임을 입력해 주세요." />
        </div>
      </div>
      <div className="row-span-3 flex flex-col items-center bg-green-100">
        {
          isLoading && <div>Loading...</div>
        }
        {
          isError && <div>Error loading character</div>
        }
        {
          !isLoading && !isError &&
          < div > 캐릭터 이름 : {character?.character_name}</div>
        }
      </div>
    </div >
  );
};

export default Character;