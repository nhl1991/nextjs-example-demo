import DataFecthAsyncAwait from "@/src/components/hooks/useEffect/data-fetch/fetchAsyncAwait";
import DataFecthPromise from "@/src/components/hooks/useEffect/data-fetch/fetchPromise";


export default function Page() {
    const divClassname = 'flex flex-col items-center justify-center'


    return (
        <section className="w-screen h-screen grid grid-cols-2 grid-rows-2 gap-4  justify-center">
            <div className={divClassname}>
                <DataFecthPromise />
            </div>
            <div className={divClassname}>
                <DataFecthAsyncAwait />
            </div>
            <div className={divClassname}>
                <h2 className="text-5xl text-left">Promise</h2>
                <pre className="whitespace-pre text-sm">
                    <code>
                        {`useEffect(() => {
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
                    
                        }, [setIsLoading])`}
                    </code>
                </pre>
            </div>
            <div className={divClassname}>
                <h2 className="text-5xl text-left ">Async/Await</h2>
                <pre className="whitespace-pre text-sm">
                    <code>
                        {`useEffect(() => {
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
                            }, [setIsLoading])`}
                    </code>
                </pre>
            </div>
        </section>
    )
}