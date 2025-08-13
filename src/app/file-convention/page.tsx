import Wrapper from "@/src/components/device-detection-demo/ui/Wrapper";
import LinkContainer from "@/src/components/ui/LinkContainer";


export default function Page(){


    return (
        <Wrapper>
            <div className="w-full h-full flex items-center justify-center">
                <div className="flex">
                <LinkContainer link="/file-convention/loading" />
                </div>
            </div>
        </Wrapper>
    )

}