
import LinkContainer from "../components/ui/LinkContainer";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-wrap gap-4">
      <LinkContainer link="/device-detection-demo" />
      <LinkContainer link="/copy-paste" />
      <LinkContainer link="/hooks" />
      </div>
    </div>
  );
}
