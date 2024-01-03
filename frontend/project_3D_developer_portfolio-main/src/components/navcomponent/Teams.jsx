import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const Teams = () => {
  return (
    <>
      <motion.div>
        <div className="relative flex flex-col h-full w-full" id="about-me">
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-340px]  h-100 w-full left-0 z-[1] object-cover "
          >
            <source src="./videos/blackhole.webm" type="video/webm" />;
          </video>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  );
};

export default SectionWrapper(Teams, "Teams");
