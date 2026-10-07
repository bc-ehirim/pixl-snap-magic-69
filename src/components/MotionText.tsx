type MotionTextProps = {
  children: string;
  className?: string;
  split?: "words" | "characters";
};

export function MotionText({ children, className = "", split = "words" }: MotionTextProps) {
  const parts = children.split(/(\s+)/);

  return (
    <span className={`motion-text ${className}`}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {parts.map((part, index) => {
          if (/^\s+$/.test(part)) return part;
          return (
            <span className="motion-word-mask" key={`${index}-${part}`}>
              {split === "characters" ? (
                Array.from(part).map((character, characterIndex) => (
                  <span className="motion-word" key={`${characterIndex}-${character}`}>
                    {character}
                  </span>
                ))
              ) : (
                <span className="motion-word">{part}</span>
              )}
            </span>
          );
        })}
      </span>
    </span>
  );
}
