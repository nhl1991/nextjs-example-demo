'use client'
import { useCallback, useMemo, useRef, useState } from "react";
import { useInfiniteScroll } from "./useInfiniteScroll"
import Image from "next/image";

type Pokemon = { name: string, url: string };
type Page = {
    count: number,
    next: string | null
    previous: string | null,
    results: Pokemon[];
};

async function fetchPage(cursor: string | null, signal: AbortSignal): Promise<Page> {
    const url = cursor ? cursor : `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error("fetch failed");
    return res.json();
}

export default function Pokemon() {
    const [items, setItems] = useState<Pokemon[]>([]);
    const [cursor, setCursor] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const abortRef = useRef<AbortController | null>(null);
    

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;
        abortRef.current?.abort();
        const ac = new AbortController();
        abortRef.current = ac;

        setLoading(true);
        try {
            const page = await fetchPage(cursor, ac.signal);
            
            const existing = new Set(items.map(i => i.name));
            const merged = [...items, ...page.results.filter((i: Pokemon) => !existing.has(i.name))];
            setItems(merged);
            setCursor(page.next);
            setHasMore(Boolean(page.next));
        } finally {
            setLoading(false);
        }
    }, [cursor, hasMore, items, loading]);

    const canLoad = useMemo(() => hasMore && !loading, [hasMore, loading]);
    const sentinelRef = useInfiniteScroll(loadMore, canLoad);

    return (
        <div className="w-full h-full overflow-hidden">
            <div className="w-full h-full flex flex-col items-center overflow-scroll">
                <ul className="md:max-w-[50%] w-full grid grid-cols-2 md:grid-cols-[repeat(4,min(240px))] auto-rows-[min(240px)] gap-5">
                    {items.map((pokemon,idx:number) =>
                        <li key={pokemon.name} className="w-full h-full flex flex-col relative">
                            <div className="h-full absolute text-7xl px-2 py-1"><h1>{idx+1}</h1></div>
                            <div className="relative w-full h-full hover:scale-120 duration-500">
                                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]
                                    }.png`} priority={idx < 20 ? true : false} sizes="(max-width:768px) 100vw, 33vw" fill alt={pokemon.name} className="object-contain" />
                            </div>
                            <div>
                                <p className="text-xl text-center font-semibold">{pokemon.name.toUpperCase()}</p>
                            </div>
                        </li>)}
                </ul>
                {hasMore ? (
                    <div className="text-2xl ">
                        <p ref={sentinelRef}>{loading ? 'Loading...' : 'More'}</p>
                    </div>
                ) : (
                    <p className="text-base p-4">End of Contents</p>
                )}
            </div>



            {loading && <p className="text-base p-4">Loading...</p>}
        </div>
    );

}

// export default function List() {
//   const [items, setItems] = useState<Item[]>([]);
//   const [cursor, setCursor] = useState<string | null>(null);
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const abortRef = useRef<AbortController | null>(null);

//   const loadMore = useCallback(async () => {
//     if (loading || !hasMore) return;

//     // 중복 호출 방지 + 이전 요청 취소
//     abortRef.current?.abort();
//     const ac = new AbortController();
//     abortRef.current = ac;

//     setLoading(true);
//     try {
//       const page = await fetchPage(cursor, ac.signal);
//       // 중복 방지: 기존 id 집합 체크
//       const existing = new Set(items.map(i => i.id));
//       const merged = [...items, ...page.items.filter(i => !existing.has(i.id))];
//       setItems(merged);
//       setCursor(page.next);
//       setHasMore(Boolean(page.nextCursor));
//     } finally {
//       setLoading(false);
//     }
//   }, [cursor, hasMore, items, loading]);

//   const canLoad = useMemo(() => hasMore && !loading, [hasMore, loading]);
//   const sentinelRef = useInfiniteScroll(loadMore, canLoad);

//   return (
//     <div>
//       <ul>
//         {items.map(it => <li key={it.id}>{it.title}</li>)}
//       </ul>

//       {hasMore ? (
//         <div ref={sentinelRef} style={{ height: 1 }} />
//       ) : (
//         <p style={{ textAlign: "center", padding: 16 }}>끝!</p>
//       )}

//       {loading && <p style={{ textAlign: "center" }}>로딩중…</p>}
//     </div>
//   );
// }
