import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";
import { useState } from "react";

export function useSectionInView(sectionName: SectionName, threshold = 0.35) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  console.log(ref);
  console.log(inView);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    setIsIntersecting(inView);
  }, [inView]);

  return {
    ref,
    inView: isIntersecting,
  };
}
