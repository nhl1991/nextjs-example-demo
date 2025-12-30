"use client";
import { QueryClientProvider, useInfiniteQuery } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Item = {
  node: {
    id: number;
    title: string;
    main_picture: {
      large: string;
      medium: string;
    };
  };
  ranking: {
    rank: number;
  };
};

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    </div>
  );
}

function Example() {
  const fetchAnimation = async ({ pageParam }: { pageParam: string }) => {
    const res = await fetch(`/api/${pageParam}` || "");
    return res.json();
  };

  const [ranking_type, setRankingType] = useState<string>("all");
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["ranking", ranking_type], // React Query cache
    queryFn: fetchAnimation,
    initialPageParam: `/ranking?ranking_type=${ranking_type}&limit=10&offset=0`,
    getNextPageParam: (lastPage) => lastPage.paging.next.split("/")[5],
  });
  useEffect(() => {}, [ranking_type]);

  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <div className="w-full min-h-full pt-18 pb-4">
        <div className="w-full px-2">
          <ul className="flex gap-2 items-center justify-center">
            <li>
              <button
                className="cursor-pointer"
                onClick={() => setRankingType("all")}
              >
                ALL
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer"
                onClick={() => setRankingType("airing")}
              >
                AIRING
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer"
                onClick={() => setRankingType("upcoming")}
              >
                UPCOMING
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer"
                onClick={() => setRankingType("tv")}
              >
                TV
              </button>
            </li>
          </ul>
        </div>
        {data
          ? data.pages.map((group, idx) => (
              <div
                key={idx}
                className="w-full h-full grid grid-cols-[repeat(1,minmax(240px,1fr))] grid-rows-[repeat(10,minmax(240px,320px))] md:grid-cols-[repeat(5,minmax(240px,1fr))] md:grid-rows-[repeat(2,minmax(240px,320px))] gap-2 p-2"
              >
                {group.data.map((item: Item) => (
                  <Animation
                    key={item.node.id}
                    node={item.node}
                    ranking={item.ranking}
                  />
                ))}
              </div>
            ))
          : null}
      </div>

      <div className="w-full flex items-center justify-center py-8">
        {isFetchingNextPage ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 animate-spin"
            >
              <path
                fillRule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : hasNextPage ? (
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetching}
            className="px-3 py-1.5 rounded-xl bg-sky-400 text-white hover:bg-sky-600 cursor-pointer"
          >
            Load More
          </button>
        ) : (
          "Nothing more to load"
        )}
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}

function Animation({
  node,
  ranking,
}: {
  node: {
    id: number;
    title: string;
    main_picture: { medium: string; large: string };
  };
  ranking: { rank: number };
}) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image
        className="object-cover  rounded-2xl"
        src={node.main_picture.large}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        alt={node.title}
        priority={ranking.rank < 3 ? true : false}
      />
      {isHover ? (
        <div className="w-full h-full absolute rounded-2xl bg-black/50 text-white flex items-center justify-center flex-col">
          <p className="text-6xl">{ranking.rank}</p>
          <p className="text-base">{node.title}</p>
        </div>
      ) : null}
    </div>
  );
}
