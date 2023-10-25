import img from "../images/katale.jpg";
import image from "../images/sigiri.jpg";
import pic from "../images/matooke.jpg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function History() {
  const myRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: myRef,
    offset: ["-0.7 1", "1.5 1"],
  });

  // const progress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={myRef}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      <section className="flex flex-col px-4 justify-center items-center md:px-4 bg-black shadow-md min-h-screen">
        <div className="md:grid grid-cols-3 gap-4 place-items-center items-baseline marker:px-4 mt-0 py-0">
          <div className="col-span-1 mt-0 py-0">
            <h2 className="antialiased text-white text-center text-4xl font-semibold ">
              History
            </h2>
            <p className="antialiased text-white text-sm md:text-lg leading-loose mt-6 ">
              Uganda, located in East Africa, has a rich history of monarchies
              ruling the country before the arrival of British explorers and
              missionaries in the late 1800s. Among these monarchies, the
              Buganda Kingdom stood out due to its strategic location along Lake
              Victoria, which was the source of the Nile river and the gold rush
              of the time during the colonial era.
            </p>
          </div>
          <div className="col-span-2">
            <h2 className="antialiased text-white text-center text-4xl font-semibold mt-6">
              Life
            </h2>
            <div className="flex gap-2 mt-10">
              <div>
                <img
                  className="max-w-full object-cover object-center shadow-sm"
                  src={img}
                  alt="lady selling in the market"
                />
              </div>
              <div>
                <img
                  className="max-w-full object-cover object-center shadow-sm"
                  src={image}
                  alt="stove"
                />
              </div>
              <div>
                <img
                  className="max-w-full object-cover object-center shadow-sm"
                  src={pic}
                  alt="platains"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
