import { motion } from 'framer-motion';

export interface ThemeToggleIconProps {
  theme: string;
  title?: string;
}

const ThemeToggleIcon = ({
  title = 'Toggle Theme',
  theme,
}: ThemeToggleIconProps) => {
  const animateContainer = {
    light: {
      opacity: 1,
      rotate: 90,
      transition: {
        type: 'spring',
        staggerChildren: 0.05,
        delayChildren: 0.005,
      },
    },
    dark: {
      opacity: 1,
      rotate: 50,
      transition: {
        type: 'spring',
        staggerChildren: 0.015,
        delayChildren: 0.015,
      },
    },
  };

  const mask = {
    light: {
      opacity: 1,
      x: '100%',
      y: '-60%',
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        dampness: 20,
      },
    },
    dark: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        dampness: 80,
      },
    },
  };

  const circle = {
    light: { scale: 0.5 },
    dark: { scale: 1 },
  };

  const beam = {
    dark: {
      pathLength: 0,
      opacity: 0,
      strokeWidth: 0,
      transition: { type: 'spring' },
    },
    light: {
      opacity: 1,
      pathLength: 1,
      transition: {
        type: 'spring',
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      initial={{ rotate: 50, opacity: 0 }}
      animate={theme}
      variants={animateContainer}
      style={{
        originX: '50%',
        originY: '50%',
        overflow: 'visible',
        width: '100%',
        height: '100%',
      }}
    >
      {title && <title>{title}</title>}
      <mask id="mask0">
        <circle cx="128" cy="128" r="128" fill="white" />
        <motion.circle
          cx="128"
          cy="32"
          r="120"
          fill="black"
          variants={mask}
          animate={theme}
        />
      </mask>
      <motion.circle
        variants={circle}
        cx="128"
        cy="128"
        r="128"
        fill="currentColor"
        mask="url(#mask0)"
        style={{ originX: '50%', originY: '50%' }}
      />
      <motion.line
        variants={beam}
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        x1="216"
        y1="128"
        x2="248"
        y2="128"
      />
      <motion.line
        variants={beam}
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        x1="190.23"
        y1="190.23"
        x2="212.85"
        y2="212.85"
      />
      <motion.line
        variants={beam}
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        x1="128"
        y1="216"
        x2="128"
        y2="248"
      />
      <motion.line
        variants={beam}
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        x1="65.77"
        y1="190.23"
        x2="43.15"
        y2="212.85"
      />
      <motion.line
        variants={beam}
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        x1="40"
        y1="128"
        x2="8"
        y2="128"
      />
      <motion.line
        variants={beam}
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        x1="65.77"
        y1="65.77"
        x2="43.15"
        y2="43.15"
      />
      <motion.line
        variants={beam}
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        x1="128"
        y1="40"
        x2="128"
        y2="8"
      />
      <motion.line
        variants={beam}
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        x1="190.23"
        y1="65.77"
        x2="212.85"
        y2="43.15"
      />
    </motion.svg>
  );
};
export default ThemeToggleIcon;
