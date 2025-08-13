"use client";
import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";
interface Node {
  id: number;
  title: string;
  main_picture: {
    medium: string;
    large: string;
  };
}
interface Ranking {
  rank: number;
}

interface Data {
  node: Node;
  ranking: Ranking;
}

export const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
  }).then((res) => res.json());

export default function Page() {
  const [offset, setOffset] = useState<number>(0);
  const { data, error, isLoading } = useSWR(
    `/api/fetchAPI?offset=${offset}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  if (data)
    return (
      <div className="w-full h-max p-2 flex justify-evenly items-center">
        <div>
          <button
            onClick={() =>
              setOffset((prev) => {
                if (prev <= 4) return 0;
                return prev - 4;
              })
            }
          >
            <svg
              className="w-8"
              data-slot="icon"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-96 flex items-center justify-evenly">
          {data.data.map((item: Data, i: number) => {
            return (
              <div key={i} className="min-w-72 h-full p-2">
                <div className="w-full h-full">
                  <div className=" aspect-[3/4] relative">
                    <Image
                      className="object-contain "
                      fill
                      src={item.node.main_picture.large}
                      alt={item.node.main_picture.medium}
                      sizes="(max-width: 768px) 25vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <button
            onClick={() =>
              setOffset((prev) => {
                if (prev >= 96) return 96;
                return prev + 4;
              })
            }
          >
            <svg
              className="w-8"
              data-slot="icon"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  else if (isLoading)
    return (
      <>
        <p>is Loading...</p>
      </>
    );
  else if (error)
    return (
      <>
        <p>Error!</p>
      </>
    );
}
