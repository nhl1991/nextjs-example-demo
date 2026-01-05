import DynamicSegmentClient from "./_components/DynamicClient";

export default async function Page({
  params,
}: {
  params: Promise<{ pathname: string }>;
}) {
  const { pathname } = await params;
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1>This Page is using dynamic segment</h1>
    <div className="flex flex-col">
      <p>SERVER Results: {pathname}</p>
      <code className="p-4">{`const {pathname} = await params;`}</code>
      <p>CLIENT</p>
      <code className="p-4">
        <p>{`const params = useParams<{ pathname: string }>()`}</p>
        <p>{`const pathname = params.pathname;`}</p>
          
          
      </code>
      </div>

      <DynamicSegmentClient />
    </div>
  );
}

// "use client";

// import { useParams } from "next/navigation";
// export default function Page() {
//   const params = useParams<{ pathname: string }>();
//   const id = params.pathname;

//   return <div>get Dynamic segment from client : {id}</div>;
// }
