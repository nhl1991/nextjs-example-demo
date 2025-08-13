
export default function Wrapper({ children }: { children: React.ReactNode }) {


    return(
        <div className="w-full h-full shadow-2xl shadow-black flex items-center justify-center">
            {children}
        </div>
    )
}