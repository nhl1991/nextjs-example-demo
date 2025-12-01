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
  useEffect(() => {
    return setRankingType('all');
  }, [ranking_type]);

  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <div className="w-full min-h-full">
        <div className="w-full px-2">
          <ul className="flex gap-2 items-center justify-center">
            <li>
              <button onClick={() => setRankingType("all")}>ALL</button>
            </li>
            <li>
              <button onClick={() => setRankingType("airing")}>AIRING</button>
            </li>
            <li>
              <button onClick={() => setRankingType("upcoming")}>
                UPCOMING
              </button>
            </li>
            <li>
              <button onClick={() => setRankingType("tv")}>TV</button>
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

      <div className="w-full flex items-center justify-center">
        <button
          className="button-hover"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetching}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
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
  useEffect(() => {
    console.log(node.title, " rendered.");
  }, []);
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
