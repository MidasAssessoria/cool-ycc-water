import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    
    // Calcular altura inicial
    const rect = ref.current.getBoundingClientRect();
    setHeight(rect.height);
    
    // Adicionar ResizeObserver para recalcular quando imagens carregam
    let timeoutId: NodeJS.Timeout;
    
    const resizeObserver = new ResizeObserver((entries) => {
      // Debounce para evitar muitas atualizações
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        for (let entry of entries) {
          const newHeight = entry.contentRect.height;
          setHeight(newHeight);
        }
      }, 100);
    });
    
    resizeObserver.observe(ref.current);
    
    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
    };
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height || 0]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans md:px-10 border-t border-gray-100"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-5xl mb-6 font-black bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-transparent">
          ¿Qué incluye tu membresía?
        </h2>
        <p className="text-neutral-600 text-base md:text-lg max-w-2xl leading-relaxed">
          Un recorrido por todas las instalaciones actuales y futuras del parque
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-24 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute left-2 md:left-2 w-12 rounded-full bg-white shadow-lg shadow-cyan-500/30 flex items-center justify-center ring-4 ring-cyan-100">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-white shadow-inner" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-cyan-600">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-cyan-600">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-1 bg-gradient-to-b from-transparent via-cyan-300 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-1 bg-gradient-to-b from-orange-500 via-cyan-500 to-cyan-600 rounded-full shadow-lg shadow-cyan-500/50"
          />
        </div>
      </div>
    </div>
  );
};
