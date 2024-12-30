import { useEffect, useRef } from "react";

export function useOutsideClose(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function OutsideClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", OutsideClick, listenCapturing);
      return () =>
        document.removeEventListener("click", OutsideClick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return ref;
}
