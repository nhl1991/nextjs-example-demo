import Code from "@/src/components/javscript/Code";
import { after } from "next/server";

export default function Page() {

    after(()=>{
        console.log('Prerender is finished.')
    })

    console.log('Logged after prerender.');

  return (
    <div className="">
      <Code>
        {`import { after } from 'next/server'
// Custom logging function
import { log } from '@/app/utils'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  after(() => {
    // Execute after the layout is rendered and sent to the user
    log()
  })
  return <>{children}</>
}`}
      </Code>
    </div>
  );
}
