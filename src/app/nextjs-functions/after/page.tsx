import Code from "@/src/components/javscript/Code";
import { after } from "next/server";

export default function Page() {
  after(() => {
    console.log("Prerender is finished.");
  });

  console.log("Logged after prerender.");

  return (
    <div className="w-full h-full p-4">
      <div>
        <h1>after()</h1>
      </div>
      <div>
        <p>
          after() はレスポンス（プリレンダー）が完了した後に実行されます。
          レスポンスを妨げることなく処理できるタスクや、
          ログ出力・分析などの副作用に利用できます。
        </p>
      </div>
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
      <div>
        <h2>Reference</h2>
        <p>
          レスポンス（またはプリレンダー）が完了した後に実行されるコールバック関数。
        </p>
      </div>
      <div>
        <h2>Duration</h2>
        <p>
          after
          は、ルートに設定されたデフォルトまたは最大の実行時間（maxDuration）の間、実行されます。
          プラットフォームが対応している場合は、ルートセグメントの設定（route
          segment config）で
          「maxDuration」を指定してタイムアウト制限を変更できます。
        </p>
      </div>
      <div>
        <h2>Good to know</h2>
        <ul>
          <li>
            after の中で他の after を呼び出すことができます。 例: after
            をラップするユーティリティ関数を作成し、追加機能を付与する。
          </li>
          <li>
            レスポンスが正常に完了しなかった場合でも after は実行されます。
            エラーが発生した場合や notFound / redirect
            が呼び出された場合も含まれる。
          </li>
          <li>
            React の cache を利用して、after 内で重複する関数を除外できます。
          </li>
        </ul>
      </div>
      <div>
        <h2>Examples</h2>
      </div>
    </div>
  );
}
