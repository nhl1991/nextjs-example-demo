import Wrapper from "@/src/components/device-detection-demo/ui/Wrapper";

export default function Loading() {
  return (
    <Wrapper>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 flex items-center justify-center rounded-2xl bg-gray-700 animate-pulse">
          <div>
            <p className="w-min">Loading will be completed after 2 seconds.</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
