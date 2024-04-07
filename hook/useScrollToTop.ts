import { useState, useEffect, useRef } from "react";

const useScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollToTop && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  return {
    scrollToTop,
    setScrollToTop,
    scrollRef,
  };
};

export default useScrollToTop;
