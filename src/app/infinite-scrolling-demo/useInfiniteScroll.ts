// useInfiniteScroll.ts
import { useEffect, useRef } from "react";

export function useInfiniteScroll(onIntersect: () => void, canLoad: boolean) {
    //
    /**
     * onIntersect : function that will be triggered when target is intersecting.
     * canLoad : true when 'hasMore' is true and not in loading.
     */
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!ref.current || !canLoad) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) onIntersect();
      },
    //   { root: null, rootMargin: "200px 0px", threshold: 0 } // 살짝 앞당겨 미리 로드
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, [onIntersect, canLoad]);

  return ref; // 센티넬 ref
}
