import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number; // ms
  className?: string;
  as?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'section' | 'article' | 'ul' | 'li' | 'header';
}

export function Reveal({ children, delay = 0, className = '', as: Component = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Component
      ref={ref as any}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`will-change-transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      } ${className}`}
    >
      {children}
    </Component>
  );
}
