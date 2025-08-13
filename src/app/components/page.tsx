import ComponentName from "@/src/components/device-detection-demo/ui/ComponentName";
import Wrapper from "@/src/components/device-detection-demo/ui/Wrapper";
import LinkContainer from "@/src/components/ui/LinkContainer";


export default function Page(){


    return(
        <Wrapper>
            <div className="w-full h-full flex items-center justify-center flex-col">
                <ComponentName>This Page is for the purpose of Next.js Components</ComponentName>
                <div className="p-4 flex">
                    <LinkContainer link="/components/image" />
                </div>
            </div>
        </Wrapper>
    )
}