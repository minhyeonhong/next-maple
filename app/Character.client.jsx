'use client'
import React, { useEffect, useState } from "react";
import { maple } from "@/axios/maple";
import { today, todayPluse } from '../common/date';
import axios from "axios";
import { get_character_info } from "@/services/CharacterService";

const Character = () => {
  
  const [character, setCharactor] = useState({
  });

  const searchCharacter = async () => {
    // name이 "character_name"인 input 요소 선택
    const character_name = document.querySelector('input[name="character_name"]').value;

    if(!character_name){
      alert('캐릭터명을 입력해 주세요.');
    }

    const result = await axios.post('/api/character', {character_name});
    console.log('res',result);
    //const result = await axios.post('/api/character/search', {character_name});
    
  }

  const rr = async () => {
    const result = await get_character_info(search.character_name);
    console.log("result", result);
  }

  const test = async () => {
    const result = await axios.post('/api/search/character', character);
    console.log("character", character);
  }

  useEffect(() => {
    console.log(character);
  }, [character])

  return (
    <div>
      <input type='text' name='character_name' />
      <button onClick={searchCharacter}>캐릭터 정보 가져오기</button><br />
      <button onClick={test}>test</button>
    </div>
  );
};

export default Character;