"use client";

export default function Text({ children }: { children: React.ReactNode }) {

    return(
        <div className="p-2">
            <p>{children}</p>
        </div>
    )
}
