import Image from "next/image";

const PAGE_SIZE = 12;
const getPokemons = (offset: number = 0) =>
    fetch(
        `https://pokeapi.co/api/v2/pokemon-species?limit=${PAGE_SIZE}&offset=${offset}`
    ).then((res) => res.json());

type Pokemon = {
    name: string,
    url: string
}

export default async function Page() {
    const initialPokemon = await getPokemons(0);
    console.log(initialPokemon.results)
    return (
        <div className="w-screen min-h-screen">
            <Wrapper>
                {initialPokemon? initialPokemon.results.map((item:Pokemon, idx:number)=>{
                    return <Pokemon key={idx} pokemon={item} />
                }) : null}
            </Wrapper>
        </div>
    )
}

function Wrapper({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className="w-full h-full grid grid-cols-4 px-12 py-10">
                {children}
            </div>
            <div className="flex justify-center items-center">
                <button className="text-2xl">Button</button>
            </div>
        </>
    )
}


function Pokemon({ pokemon }: { pokemon: Pokemon}) {
    return (
        <div className="w-full h-full flex flex-col px-8 py-2 items-center justify-center">
            <div className="w-full h-full relative ">
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                pokemon.url.split("/")[6]
              }.png`} className="object-contain" fill sizes="(max-width: 768px) 100vw, 33vw" alt={pokemon.name} />
            </div>
            <div className="text-3xl font-bold">
                <p>{pokemon.name}</p>
            </div>
        </div>
    )
}


