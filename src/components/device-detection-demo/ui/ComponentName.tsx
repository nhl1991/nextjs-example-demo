
export default function ComponentName({ children } : { children : React.ReactNode }){
    
    return(
        <>
            <h1 className="text-4xl font-bold">
                {children}
            </h1>
        </>
    )
}