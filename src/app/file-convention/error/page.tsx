"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [shouldError, setShouldError] = useState(false);
  if (shouldError) throw new Error("Error occured.");

  useEffect(() => {
    return ()=> {setShouldError(false);
        console.log('shouldError set to false.')
    }
  });
  return (
    <div>
      <button className="button-hover" onClick={() => setShouldError(true)}>Throw Error</button>
    </div>
  );
}
