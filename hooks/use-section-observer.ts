import { RefObject, useCallback, useEffect, useRef } from "react";

export function useSectionObserver(
  onIntersecting: (entry: IntersectionObserverEntry) => void
): RefObject<(HTMLElement | null)[]> {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  // Wrap callback in useCallback biar referensinya stabil — gak bikin observer
  // disconnect/reconnect tiap render
  const stableCallback = useCallback(onIntersecting, []); // eslint-disable-line

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stableCallback(entry);
          }
        });
      },
      {
        // Turunin threshold ke 0.05 — trigger begitu 5% section keliatan.
        // Ini fix bug mobile: section besar (min-h-screen) susah capai 30%
        // apalagi dikombinasi rootMargin negatif.
        threshold: 0.05,
        // Hapus rootMargin negatif — gak perlu di mobile, malah bikin trigger
        // makin susah karena viewport kecil
        rootMargin: "0px 0px 0px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [stableCallback]);

  return sectionsRef;
}
