'use client'
import SearchSVG from "@/public/assets/character/search.svg";
import SearchCansleSVG from "@/public/assets/character/search_cansle.svg";

const InputSearch = ({ input, setInput, inputEnter }) => {

    return (
        <div className="w-[96%] h-16 relative flex items-center rounded-xl bg-[#FAFAFA]">
            <div className="pointer-events-none absolute left-2 ">
                <SearchSVG width={24} height={24} color="#4d4d4d" />
            </div>
            <input type="text" name='search'
                value={input || ""}
                onChange={(e) => { setInput(e.target.value) }}
                onKeyUp={(e) => { e.key === 'Enter' && inputEnter() }}
                className="w-full h-full px-10 rounded-xl bg-blue-100"
                placeholder="캐릭터 닉네임을 입력해 주세요."
            />
            <div className="cursor-pointer absolute right-2"
                onClick={() => setInput("")}
            >
                <SearchCansleSVG width={24} height={24} color="#4d4d4d" />
            </div>
        </div>
    );
};

export default InputSearch;