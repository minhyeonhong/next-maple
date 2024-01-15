'use client'
import axios from "axios";
import Character from "./Character.client";

export default function Home() {

  const test = async () => {
    const result = await axios.post('/api/characters', { test: 'test' });
    console.log("result", result);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Character /> */}
      <button onClick={test}>test</button>
    </main>
  )
}
