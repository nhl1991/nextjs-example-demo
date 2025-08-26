
export default function Wrapper({ children }: { children: React.ReactNode }) {


    return(
        <div className="shadow-lg rounded-2xl px-4 shadow-black/50">
            {children}
        </div>
    )
}