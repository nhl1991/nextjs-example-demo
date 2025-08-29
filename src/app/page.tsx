import LinkContainer from "../components/ui/LinkContainer";

export default function Home() {
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-[48rem] flex flex-wrap p-4 gap-2">
        <LinkContainer link="https://position-playground.vercel.app" />

        <LinkContainer link="/https://css-study-nine.vercel.app/" />
        <LinkContainer link="/device-detection-demo" />
        <LinkContainer link="/copy-paste" />
        <LinkContainer link="/hooks" />
        <LinkContainer link="/components" />
        <LinkContainer link="/file-convention" />
        <LinkContainer link="/blackhole" />
        
      </div>
    </div>
  );
}
