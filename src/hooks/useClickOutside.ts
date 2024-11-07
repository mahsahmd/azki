import { RefObject, useEffect, useRef } from "react";

export const useClickOutside = <TagType extends Element = Element>(
  handler: (event: MouseEvent | TouchEvent) => void
): { reference: RefObject<TagType> } => {
  const reference = useRef<TagType>(null);
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !reference.current ||
        reference.current.contains(event.target as Node)
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [reference, handler]);
  return { reference };
};
