import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Organization() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          delay: 0.9,
          duration: 2,
          bounce: 0.3,
        },
      });
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      animate={animation}
      className="flex md:w-1/2 justify-center items-center min-h-screen "
    >
      <div className="px-4">
        <h2 className="antialiased text-gray-700 text-center text-4xl font-semibold">
          Organization
        </h2>
        <motion.p
          ref={ref}
          animate={animation}
          className="text-sm md:text-lg mt-8 leading-loose text-gray-900 shadow-sm shadow-red-100 px-2 py-4 md:shadow-lg"
        >
          The administration system in the Kingdom of Buganda was heavily
          reliant on clans. Every person belonged to one, and children
          automatically inherited their father's clan. Members were not allowed
          to intermarry within the clan, and duties were assigned based on
          membership. Additionally, each clan had reserved names, which were
          essential for identification. Therefore, many Baganda can easily
          recognize the name Katerega as belonging to the royal clan.
        </motion.p>
      </div>
    </section>
  );
}
