import { motion } from "framer-motion";
import HeroImg1 from "@/assets/heroimg2.jpg";

export default function MainSection1() {
  // 🔥 Container animation (stagger children)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 🔥 Common fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full px-3 sm:px-16 py-6">
      
      <div className="relative w-full rounded-xl overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroImg1})`,
          }}
        />

        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-xl" />

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-4 py-8"
        >

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-2 text-white max-w-3xl mx-auto text-base font-medium lg:text-lg"
          >
            We provide practical and reliable healthcare solutions designed to simplify operations, 
            improve efficiency, and enhance patient experience. Our services are built with a clear 
            focus on usability, ensuring that healthcare providers can manage their daily activities 
            with ease while delivering better care.
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
}