import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex justify-center items-center min-h-screen">
      <section>
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.5,
            y: "-1000",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 2,
            type: "spring",
            bounce: 0.5,
          }}
          className="antialiased text-6xl text-center text-gray-700 leading-snug"
        >
          My Background
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, scale: 0.6, x: "-100vw" }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            delay: 0.9,
            duration: 2,
            type: "spring",
            stiffness: 20,
          }}
          className="antialiased text-5xl tracking-widest text-gray-700 text-center mt-4"
        >
          Banange
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5, x: 1000 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1, duration: 2, type: "spring", stiffness: 25 }}
          className="antialiased text-xl text-gray-700 text-center mt-4"
        >
          <span className="block italic text-md">origin</span>
          <span className="mt-2 block italic">of</span>{" "}
          <span className="antialiased text-6xl text-red-700 font-semibold">
            Katerega
          </span>
        </motion.h2>
      </section>
    </header>
  );
}
