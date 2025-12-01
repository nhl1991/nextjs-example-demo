
import LinkContainer from "../components/ui/LinkContainer";

export default function Home() {
  
  return (
    <div className="w-full h-full flex items-center justify-center">

      <div className="max-w-[60rem] flex flex-wrap p-4 gap-4">
        <LinkContainer link="/javascript" />
        <LinkContainer link="https://position-playground.vercel.app" />
        <LinkContainer link="https://css-study-nine.vercel.app/" />
        <LinkContainer link="/device-detection-demo" />
        <LinkContainer link="/copy-paste" />
        <LinkContainer link="/hooks" />
        <LinkContainer link="/components" />
        <LinkContainer link="/file-convention" />
        <LinkContainer link="/blackhole" />
        <LinkContainer link="/infinite-scrolling-demo" />
        <LinkContainer link="/intersectionObserver" />
        <LinkContainer link="/tanstack-infinite-scroll" />
        <LinkContainer link="/react-index-key-problem" />
      </div>

    </div>
  );
}
