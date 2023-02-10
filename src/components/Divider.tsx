'use client'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children?: string;
  baseVelocity?: number;
}

function ParallaxText({ baseVelocity = -2 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-0, -80, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className="bg-black text-green">DESIGN</span>
        <span className="bg-white text-navy">ENGINEER</span>
        <span className="bg-black text-green">DEVELOP</span>
        <span className="bg-white text-navy">ARCHITECT</span>
        <span className="bg-black text-green">BUILD</span>
        <span className=" text-navy bg-white">DEPLOY</span>
        <span className="bg-black text-green">SHIP</span>
        <span className="bg-white text-navy">PLAN</span>
        <span className="bg-black text-green">DIAGRAM</span>
        <span className="bg-white text-navy">IMPLEMENT</span>
        <span className="bg-black text-green">DESIGN</span>
        <span className="bg-white text-navy">ENGINEER</span>
        <span className="bg-black text-green">DEVELOP</span>
        <span className="bg-white text-navy">ARCHITECT</span>
        <span className="bg-black text-green">BUILD</span>
        <span className=" text-navy bg-white">DEPLOY</span>
        <span className="bg-black text-green">SHIP</span>
        <span className="bg-white text-navy">PLAN</span>
        <span className="bg-black text-green">DIAGRAM</span>
        <span className="bg-white text-navy">IMPLEMENT</span>
      </motion.div>
    </div>
  );
}

export default function Divider() {
  return (
    <div className="w-full flex items-center overflow-hidden h-fit bg-white">
      <div className="whitespace-nowrap text-[5rem] tracking-widest line-through decoration-orange decoration-8">
        <ParallaxText />
      </div>
    </div>
  );
}
