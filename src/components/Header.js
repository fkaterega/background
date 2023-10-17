import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex justify-center items-center min-h-screen">
      <section>
        <h1 className="antialiased text-6xl text-center text-gray-700 leading-snug">
          My Background
        </h1>
        <h2 className="antialiased text-4xl tracking-widest text-green-600 text-center mt-4">
          Banange
        </h2>
        <h2 className="antialiased text-xl text-gray-700 text-center mt-4">
          <span className="block italic text-md">origin</span>
          <span className="mt-2 block italic">of</span>{" "}
          <span className="antialiased text-6xl text-teal-700">Katerega</span>
        </h2>
      </section>
    </header>
  );
}
