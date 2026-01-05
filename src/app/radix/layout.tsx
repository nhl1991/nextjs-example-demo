"use client"
import { Theme, ThemePanel } from "@radix-ui/themes";

export default function RadixLayout({children} : { children:React.ReactNode}){

    return(
        <Theme>
            {children}
            <ThemePanel />
        </Theme>
    )
}