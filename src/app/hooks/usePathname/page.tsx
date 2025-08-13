'use client'
import ComponentName from "@/src/components/device-detection-demo/ui/ComponentName";
import Wrapper from "@/src/components/device-detection-demo/ui/Wrapper";
import { usePathname } from "next/navigation";

export default function Page(){
    const pathname = usePathname();

    return(
        <Wrapper>
            <div className="w-full h-full flex items-center justify-center">
                <div>
                    <ComponentName>usePathname</ComponentName>
                    <p>usePathname is a Client Component hook that lets you read the current URL's pathname.</p>
                    <div className="p-2">
                        {pathname}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}