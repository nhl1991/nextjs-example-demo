import Wrapper from "@/src/components/device-detection-demo/ui/Wrapper";

// export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ id: "generate" }, { id: "static" }, { id: "params" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = await params;
  console.log(id);
  return (
    <Wrapper>
      <section></section>
    </Wrapper>
  );
}
