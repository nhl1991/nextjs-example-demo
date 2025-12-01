'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-6 flex flex-col items-center justify-center gap-4">
      <h2>エラーが発生しました 😵</h2>
      <p>Message : {error.message}</p>
      <button className="button-hover" onClick={() => reset()}>
        再試行する
      </button>
    </div>
  );
}
