import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      <div
        className={`absolute inset-0 sm:top-[120px] top-[60px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 xs:h-60 violet-gradient' />
        </div>

        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white xs:text-[40px] text-[30px]`}>
            Hello, I'm <span className='text-[#915EFF]'>Kibet</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 xs:text-[18px] text-[14px]`}>
            I develop 3D Visuals, Digital Twins, 
            <span className="sm:hidden"><br /></span> {/* Always break line on mobile */}
            Web Apps and IoT Systems.
          </p>
        </div>
      </div>

      {/* Responsive Canvas Container */}
      <div className="absolute inset-0 w-full h-full sm:mt-0 mt-20">
        <ComputersCanvas />
      </div>

      {/* Scroll indicator with mobile adjustments */}
      <div className='absolute sm:bottom-10 bottom-20 w-full flex justify-center items-center z-20'>
        <a href='#about'>
          <div className='w-[30px] h-[54px] xs:w-[35px] xs:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1 xs:p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      {/* Mobile Overlay Gradient */}
      <div className="sm:hidden block absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/50 pointer-events-none" />
    </section>
  );
};

export default Hero;
