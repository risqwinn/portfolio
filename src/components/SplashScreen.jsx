import { motion } from "framer-motion";

export default function SplashScreen({ finishLoading }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F172A]"
    >
      <div className="text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-[#FFFFFF] tracking-tighter"
        >
          Loading<span className="text-[#3B82F6]">....</span>
        </motion.h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={finishLoading}
          className="h-1 bg-[#3B82F6] mt-4 rounded-full mx-auto"
        />
      </div>
    </motion.div>
  );
}