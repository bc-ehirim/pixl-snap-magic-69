import type { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  return (
    <Tag data-motion-reveal className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
