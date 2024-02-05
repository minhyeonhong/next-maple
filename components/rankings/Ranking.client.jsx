'use client'
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { app } from '@/axios/app';
import SearchSVG from "@/public/assets/character/search.svg";

const Ranking = () => {

    const test = async () => {
        const result = await app.post('/api/ranking/overall',
            {
                world_name: "",
                class: "",
                ocid: "",
                page: "",
            });

        console.log(result);
    }

    return (
        <div>
            <button onClick={test}>test</button>
        </div>
    );
};

export default Ranking;