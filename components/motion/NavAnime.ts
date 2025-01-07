export const mountAnim = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export const navHeight = {
  initial: {
    height: 0,
  },
  enter: (i: number) => ({
    height: "100%",
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
  exist: (i: number) => ({
    height: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

export const navbackground = {
  initial: {
    opacity: 0,
  },

  enter: {
    opacity: 0.5,

    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },

  exit: {
    opacity: 0,

    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};
