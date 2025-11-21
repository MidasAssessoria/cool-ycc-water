"use client"

import { motion, useInView, Variants } from "framer-motion"
import { RefObject, useRef, createElement } from "react"

interface TimelineContentProps {
  children: React.ReactNode;
  animationNum: number;
  timelineRef: RefObject<HTMLElement>;
  customVariants?: Variants;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function TimelineContent({
  children,
  animationNum,
  timelineRef,
  customVariants,
  className = "",
  as = "div",
}: TimelineContentProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  const defaultVariants: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  }

  const variants = customVariants || defaultVariants

  return createElement(
    motion[as] as any,
    {
      ref,
      custom: animationNum,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      variants,
      className,
    },
    children
  )
}
