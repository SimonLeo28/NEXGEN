"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

// Update the component to accept an array of strings
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string[];  // Accept an array of strings
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 5,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.map((line, lineIndex) => (
          <div key={lineIndex} className="flex">
            {line.split(" ").map((word, idx) => (
              <motion.span
                key={word + idx}
                className="dark:text-black font-bold text-black opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}
                {/* Only add a space if this is not the last word */}
                {idx < line.split(" ").length - 1 && <span>&nbsp;</span>}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-black font-bold text-black text-5xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
