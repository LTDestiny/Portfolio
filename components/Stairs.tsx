import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index: number) => {
  const totalSteps = 7; // total number of steps
  return totalSteps - index - 1; // reverse the index
};

export default function Stairs() {
  return (
    <>
      {/* render 6 motion divs, each representing a step of the stairs.
      Each div will have the same animation defined by the stairsAnimation object.
      The delay for each div is calculated dynamically based on it's reversed index,
      createing a staggerd effect with descreasing delay for each subsequent step.
      */}
      {[...Array(7)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          ></motion.div>
        );
      })}
    </>
  );
}
