'use client'
import { useEffect, useState } from "react"
type quote = {
    id: number
    quote: string,
    author: string,
}

export default function DataFecthPromise() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [quote, setQuote] = useState<quote>();
    useEffect(() => {

        const index = Math.floor(Math.random() * 30)

        setIsLoading(true);

        fetch('https://dummyjson.com/quotes', {
            method: 'GET'
        }).then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res);
            setQuote(res.quotes[index]);
        }).catch((error) => {
            setError(true);
            console.log(error.message)
        }).finally(() => {
            setIsLoading(false);
        })

    }, [setIsLoading])

    return (
        <article className="w-1/2 flex items-center justify-center">

            {
                isLoading ? <>...Loading</> :
                    error ? <p>{error}</p> :
                        <div className="px-8">
                            <p className="text-bold text-4xl">{quote ? quote.quote : ''}</p>
                            <p className="text-right">- {quote ? quote.author : ''}</p>
                        </div>
            }
        </article>
    )
}