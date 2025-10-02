'use client'
import { useEffect, useState } from "react"
type quote = {
    id: number
    quote: string,
    author: string,
}

export default function DataFecthAsyncAwait() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [quote, setQuote] = useState<quote>();
    useEffect(() => {
        const index = Math.floor(Math.random() * 30)
        const fetchQuotes = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://dummyjson.com/quotes', {
                    method: 'GET'
                })
                const result = await response.json();
                console.log(result.quotes[index]);
                setQuote(result.quotes[index]);
            } catch (error) {
                setError(true);
                if (error instanceof Error)
                    console.log(error.message)
            } finally {
                setIsLoading(false);
            }
        }
        fetchQuotes();
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