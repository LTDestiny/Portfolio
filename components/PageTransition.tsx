"use client";

import { AnimatePresence, motion } from "framer-motion";

import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div className="" key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
