"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Pokemon {
    name: string,
    url: string
}

// image src : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`
export default function Page() {
  const [offset, setOffset] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const promisePokemon = new Promise((resolve, reject)=>{
        const response = fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
      ).then((res) => res.json());
    })

    const fetchPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
      ).then((res) => res.json());
      
      setPokemon(response.results);
    };

    fetchPokemon();
  }, [offset]);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-max items-center justify-center grid grid-cols-[repeat(4,minmax(240px,320px))] grid-rows-[repeat(5,minmax(240px,320px))]">
        {pokemon ? pokemon.map((item:Pokemon, idx) => {
            return <div key={idx} className="w-full h-full">
                <div className="w-full h-full relative">
                <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.url.split("/")[6]}.png`}
                alt={item.name}
                fill
                className="object-contain hover:scale-125 duration-500"
                sizes="(max-width: 768px) 33vw, 50vw"
                priority={true}
                />
                <div className="absolute z-50 bottom-0">
                    <p className="font-bold text-5xl">{item.name}</p>
                </div>
                </div>
                
            </div>
        }) : null}</div>

      <button onClick={() => setOffset((prev) => prev + 10)}>Next</button>
    </div>
  );
}
